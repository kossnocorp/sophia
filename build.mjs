import watcher from "@parcel/watcher";
import { spawn } from "child_process";
import { readFile, writeFile, readdir } from "fs/promises";
import { minimatch } from "minimatch";
import { relative, resolve } from "path";
import { parse } from "yaml";

// const selfPath = relative(process.cwd(), import.meta.filename);
const paths = ["src/**/*.yaml"];

generate();

const watch = !!process.argv.find((arg) => arg === "--watch");
if (watch) {
  const debouncedGenereate = debounce(generate, 50);

  watcher.subscribe(process.cwd(), (error, events) => {
    if (error) {
      console.error("The filesystem watcher encountered an error:");
      console.error(error);
      process.exit(1);
    }

    events.forEach((event) => {
      if (event.type !== "create" && event.type !== "update") return;
      const path = relative(process.cwd(), event.path);

      if (!paths.some((pattern) => minimatch(path, pattern))) return;
      debouncedGenereate();
    });
  });
}

async function generate() {
  const [themes, base, languages] = await Promise.all([
    readYAMLs(resolve("src", "themes")),
    readYAML(resolve("src", "base.yaml")),
    readYAMLs(resolve("src", "languages")),
  ]);

  await Promise.all(
    themes.map((theme) => generateTheme(theme, base, languages))
  );
}

async function generateTheme(theme, base, languages) {
  const obj = {
    name: theme.name,
    type: theme.type,
    colors: base,
    tokenColors: [],
  };

  const layers = {};

  languages.forEach((language) => {
    Object.entries(language).forEach(([layer, groups]) => {
      layers[layer] ||= {};
      Object.entries(groups).forEach(([group, scopes]) =>
        (layers[layer][group] ||= []).push(...scopes)
      );
    });
  });

  Object.entries(theme.syntax).forEach(([layer, groups]) => {
    Object.entries(groups).forEach(([group, color]) => {
      const scopes = layers[layer]?.[group];
      if (!scopes?.length) return;
      obj.tokenColors.push({
        scope: scopes.join(", "),
        settings: {
          foreground: color,
        },
      });
    });
  });

  const content = JSON.stringify(obj, null, 2);
  await writeFile(
    resolve("themes", `sophia-${theme.slug}-color-theme.json`),
    content
  );
}

async function readYAML(path) {
  const content = await readFile(path, "utf-8");
  return parse(content);
}

async function readYAMLs(path) {
  const files = await readdir(path);
  const contents = await Promise.all(
    files.map((file) =>
      file.endsWith(".yaml") ? readFile(resolve(path, file), "utf-8") : null
    )
  );
  return contents.filter(Boolean).map(parse);
}

function debounce(func, waitFor) {
  let timeout;
  return (...args) => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}
