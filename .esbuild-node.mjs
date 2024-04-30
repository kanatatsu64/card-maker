import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app/server.tsx"],
  bundle: true,
  outfile: "public/server.js",
  loader: {
    ".ts": "ts",
    ".tsx": "tsx",
  },
  format: "esm",
  target: "es2015",
  platform: "node",
});
