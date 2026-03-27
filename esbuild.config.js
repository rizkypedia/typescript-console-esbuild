import { build } from "esbuild";

build({
  entryPoints: ["src/index.ts"],
  outfile: "dist/index.js",
  bundle: true,
  platform: "node",      // Node.js app
  format: "esm",         // or "cjs" if you prefer
  sourcemap: true,
  target: "node22",
  logLevel: "info",
  // Optional: external modules if needed
  // external: ["@aws-sdk/*"]
}).catch(() => process.exit(1));

// import { context } from "esbuild";

// async function buildApp() {
//   const ctx = await context({
//     entryPoints: ["src/index.ts"],
//     outfile: "dist/index.js",
//     bundle: true,
//     platform: "node",
//     format: "esm",
//     sourcemap: true,
//     target: "node22"
//   });

//   await ctx.watch();
//   console.log("Watching for changes...");
// }

// buildApp();