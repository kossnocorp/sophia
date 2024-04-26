import watcher from "@parcel/watcher";
import { readFile, writeFile } from "fs/promises";
import JSON5 from "json5";
import { minimatch } from "minimatch";
import { relative } from "path";

const colorsPath = "colors.json";
const templatePath = "template-color-theme.json";
const paths = [colorsPath, templatePath];

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
  const [colors, template] = await Promise.all([
    readFile(colorsPath, "utf-8").then(JSON5.parse),
    readFile(templatePath, "utf-8"),
  ]);

  const theme = Object.entries(colors).reduce(
    (theme, [key, value]) =>
      theme.replace(new RegExp(key.replace("$", "\\$"), "g"), value),
    template
  );

  await writeFile("themes/Sophia Dark-color-theme.json", theme);
}

function debounce(func, waitFor) {
  let timeout;
  return (...args) => {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}
