import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/server.ts"],
  bundle: true,
  outfile: ".esbuild/bundle.js",
  loader: {
    ".ts": "ts",
  },
  format: "esm",
  target: "es2015",
  platform: "node",
});
