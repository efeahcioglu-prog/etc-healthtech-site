import { cp, mkdir, rm, writeFile } from "fs/promises";
import path from "path";

const root = process.cwd();
const outDir = path.join(root, "out");
const distDir = path.join(root, "dist");
const serverDir = path.join(distDir, "server");
const metadataDir = path.join(distDir, ".openai");

await rm(distDir, { recursive: true, force: true });
await cp(outDir, distDir, { recursive: true });
await mkdir(serverDir, { recursive: true });
await mkdir(metadataDir, { recursive: true });
await cp(path.join(root, ".openai", "hosting.json"), path.join(metadataDir, "hosting.json"));
await writeFile(
  path.join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
`
);
