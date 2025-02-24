import { build } from "esbuild";
import { nodeModulesPolyfillPlugin as _nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';
import react18Plugin from 'esbuild-plugin-react18';
build({
  entryPoints: ["public/admin/DocsPreview.jsx"],
  bundle: true,
  format: "iife", 
  globalName: "DocsPreview",
  outfile: "public/admin/scripts/DocsPreview.js",
  minify: false,
  sourcemap: false,
  loader: { '.js': 'jsx' },
  plugins: [_nodeModulesPolyfillPlugin(), react18Plugin()],
  target: ["chrome58", "firefox57", "safari11"],
}).catch(() => process.exit(1));
