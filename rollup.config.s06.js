import { terser } from "rollup-plugin-terser";
export default {
  input: "src/section06/index.js",
  output: {
    dir: "output/section06",
    format: "system",
    sourcemap: true,
  },
  plugins: [terser()],
};
