import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app/server.ts"],
  bundle: true,
  outfile: "public/server.js",
  loader: {
    ".ts": "ts",
  },
  format: "esm",
  target: "es2015",
  platform: "node",
});
