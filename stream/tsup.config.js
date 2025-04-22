import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["cjs"],
  clean: true,
  tsconfig: "tsconfig.json",
  target: "node16",
  shims: false,
});
