import { cp, rm } from "fs/promises";
import path from "path";

const root = process.cwd();
const outDir = path.join(root, "out");
const distDir = path.join(root, "dist");

await rm(distDir, { recursive: true, force: true });
await cp(outDir, distDir, { recursive: true });
