import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app/index.tsx"],
  bundle: true,
  outfile: "public/index.js",
  loader: {
    ".tsx": "tsx",
    ".ts": "ts",
  },
  format: "esm",
  target: "es2015",
  platform: "browser",
});
