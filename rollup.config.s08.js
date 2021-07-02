import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";

export default {
  input: "src/section08/index.js",
  output: {
    dir: "output/section08",
    format: "cjs",
    sourcemap: true,
    exports: "default",
  },
  plugins: [resolve(), babel({ babelHelpers: "bundled" }), terser()],
};
