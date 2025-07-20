import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  minify: true,
  sourcemap: true,
  target: "es2020",
  splitting: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
  },
});
