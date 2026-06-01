const vscode = require("vscode");
const bundle = require("../bundle.js");
const tailwindData = require("../data/tailwind.json");

const TAILWIND_RAINBOW_EXTENSION_ID = "esdete.tailwind-rainbow";
const TAILWIND_RAINBOW_THEME_ID = "sophia-dark";

async function integrateWithTailwindRainbow(context) {
  const tailwindRainbow = vscode.extensions.getExtension(TAILWIND_RAINBOW_EXTENSION_ID);

  if (!tailwindRainbow) return;
  if (!tailwindRainbow.isActive) await tailwindRainbow.activate();

  const api = tailwindRainbow.exports;
  if (!api || typeof api.registerTheme !== "function") return;

  const disposable = api.registerTheme(
    TAILWIND_RAINBOW_THEME_ID,
    createTailwindRainbowTheme(bundle.themes.find((theme) => theme.slug === "dark")),
  );

  if (disposable) context.subscriptions.push(disposable);
}

function createTailwindRainbowTheme(theme) {
  const layers = theme?.layers || {};
  // NOTE: It must always correspond to `editor.foreground` defined in
  // `./base.yaml`.
  const fallbackColor = "#7A7A7A";
  const color = (path) => {
    const [layer, group] = path.split(".");
    return layers[layer]?.[group] || fallbackColor;
  };

  // NOTE: Tailwind classes must be defined explicitly as it doesn't ship with
  // the list of all the classes, so we rely on handcrafted dataset generated
  // using `@tailwindcss/node` package.
  const bases = [...tailwindData.bases];
  const prefixes = tailwindData.variants.map((variant) => variant.name);

  return {
    base: Object.fromEntries(bases.map((base) => [base, style(color("data.effect"))])),
    prefix: Object.fromEntries(prefixes.map((prefix) => [prefix, style(color("data.control"))])),
    important: { ...style(color("data.control")), fontStyle: "underline" },
  };
}

function style(color) {
  return { color };
}

module.exports = { integrateWithTailwindRainbow };
