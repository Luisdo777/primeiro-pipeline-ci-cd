const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "dist");
fs.mkdirSync(dist, { recursive: true });

fs.copyFileSync(
  path.join(__dirname, "app.js"),
  path.join(dist, "app.js")
);

console.log("Build concluída: arquivo copiado para a pasta dist.");
