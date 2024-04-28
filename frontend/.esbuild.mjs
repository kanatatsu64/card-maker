import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.tsx"],
  bundle: true,
  outfile: "../public/bundle.js",
  loader: {
    ".tsx": "tsx",
    ".ts": "ts",
  },
  format: "esm",
  target: "es2015",
  platform: "browser",
});
