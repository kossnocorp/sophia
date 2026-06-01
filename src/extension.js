const { integrateWithTailwindRainbow } = require("./integrations/esdete.tailwind-rainbow.js");

const integrations = [integrateWithTailwindRainbow];

async function activate(context) {
  await Promise.all(integrations.map((integration) => integration(context)));
}

function deactivate() {}

module.exports = { activate, deactivate };
