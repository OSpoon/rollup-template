import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/section07/index.js",
  output: {
    dir: "output/section07",
    format: "cjs",
    sourcemap: true,
    exports: "default",
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    terser(),
  ],
  external: ["lodash"],
};
