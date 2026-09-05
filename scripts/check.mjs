import { access, readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const html = await readFile(join(dist, "index.html"), "utf8");
const css = await readFile(join(dist, "styles.css"), "utf8");
await readFile(join(dist, "main.js"), "utf8");

const required = [
  "Unfold",
  "Coming Soon for Windows",
  "Private Reflection is designed to keep reflection processing on your computer.",
  'mailto:',
];

for (const text of required) {
  if (!html.includes(text)) {
    throw new Error(`Missing expected copy: ${text}`);
  }
}

const forbidden = [
  "AI-powered productivity",
  "unlock your potential",
  "revolutionize",
  "supercharge",
  "game-changing",
  "second brain",
  "Ronald",
  "Notebook",
  "GGUF",
  "llama",
  "Ollama",
  "localhost",
  "endpoint",
  "SUPPORT_EMAIL_NOT_CONFIGURED",
];

for (const text of forbidden) {
  if (html.includes(text) || css.includes(text)) {
    throw new Error(`Forbidden public copy found: ${text}`);
  }
}

for (const asset of [
  "/styles.css",
  "/main.js",
  "/favicon.ico",
  "/images/unfold.png",
  "/images/unfold-thoughts.png",
  "/images/unfold-search.png",
  "/images/unfold-reflection.png",
]) {
  const localPath = join(dist, asset.replace(/^\//, ""));
  await access(localPath);
  const info = await stat(localPath);
  if (info.size === 0) {
    throw new Error(`Empty asset: ${asset}`);
  }
}

const files = await readdir(dist);
if (!files.includes("index.html")) {
  throw new Error("No index.html in dist");
}

console.log("Static checks passed");
