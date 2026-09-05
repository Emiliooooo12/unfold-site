import { createServer } from "node:http";
import { createReadStream, existsSync } from "node:fs";
import { extname, join, normalize } from "node:path";

const root = process.argv[2] === "dist" ? "dist" : "src";
const port = Number(process.env.PORT || 4173);
const publicRoot = process.argv[2] === "dist" ? "dist" : "public";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
};

function resolvePath(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const candidate = pathname === "/" ? "/index.html" : pathname;
  const base = candidate.startsWith("/images/") || candidate === "/favicon.ico" ? publicRoot : root;
  const path = normalize(join(process.cwd(), base, candidate));
  return path;
}

createServer((req, res) => {
  const path = resolvePath(req.url || "/");
  if (!existsSync(path)) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }

  res.writeHead(200, { "content-type": types[extname(path)] || "application/octet-stream" });
  createReadStream(path).pipe(res);
}).listen(port, () => {
  console.log(`Unfold site preview: http://localhost:${port}`);
});
