import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/config.ts"],
  outDir: "./lib",
  shims: true,
});
