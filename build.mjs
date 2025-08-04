import watcher from "@parcel/watcher";
import { readdir, readFile, writeFile } from "fs/promises";
import { minimatch } from "minimatch";
import { relative, resolve } from "path";
import { parse } from "yaml";

// const selfPath = relative(process.cwd(), import.meta.filename);
const paths = ["src/**/*.yaml"];

generate();

const watch = !!process.argv.find((arg) => arg === "--watch");
if (watch) {
  const debouncedGenerate = debounce(generate, 50);

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
      debouncedGenerate();
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
    semanticHighlighting: true,
    tokenColors: [],
    semanticTokenColors: {},
  };

  const layers = {};
  const styles = {};

  languages.forEach((language) => {
    // Ignore freshly created YAML
    if (!language) return;

    Object.entries(language.layers || {}).forEach(([layer, groups]) => {
      layers[layer] ||= {};
      Object.entries(groups || {}).forEach(([group, scopes]) =>
        (layers[layer][group] ||= []).push(
          ...(scopes?.map((scope) => {
            // Add language id if defined, it will allow distinguishing between languages
            if (typeof scope === "object" && language.id)
              return { ...scope, language_: language.id };
            return scope;
          }) || [])
        )
      );
    });

    Object.entries(language.styles || {}).forEach(([style, scopes]) => {
      (styles[style] ||= []).push(...scopes);
    });
  });

  Object.entries(theme.layers || {}).forEach(([layer, groups]) => {
    Object.entries(groups).forEach(([group, color]) => {
      const basic = [];
      const semantic = [];

      layers[layer]?.[group]?.forEach((scope) => {
        // The semantic tokens is defined as an object:
        //
        //   - variable: true
        //
        // ...or:
        //
        //   - variable:
        //     - declaration
        //     - local
        if (scope && typeof scope === "object") {
          const name = Object.keys(scope)[0];

          // Prepare segments. If the semantic token is defined via true
          // (`- variable: true`) then add only the name, otherwise add name
          // followed by modifiers.
          const segments = [];
          if (scope[name] === true) segments.push(name);
          else segments.push(name, ...scope[name]);

          // Language is added to the end: variable.declaration.local:js
          // See: https://github.com/microsoft/vscode/wiki/Semantic-Highlighting-Overview#as-a-theme-author-do-i-need-to-change-my-theme-to-make-it-work-with-semantic-highlighting
          const add = (lang) =>
            semantic.push([segments.join(".")].concat(lang || []).join(":"));

          // Add semantic tokens for all languages
          if (Array.isArray(scope.language_)) scope.language_.forEach(add);
          else add(scope.language_);
        }

        // Basic token scopes
        else basic.push(scope);
      });

      // Add basic tokens
      if (basic.length)
        obj.tokenColors.push({
          scope: basic.join(", "),
          settings: {
            foreground: color,
          },
        });

      // Add semantic tokens
      semantic.forEach(
        (semantic) => (obj.semanticTokenColors[semantic] = color)
      );
    });
  });

  Object.entries(styles || {}).forEach(([style, scopes]) => {
    if (!scopes?.length) return;
    obj.tokenColors.push({
      scope: scopes.join(", "),
      settings: {
        fontStyle: style,
      },
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
