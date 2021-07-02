import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/section02/index.js",
  output: {
    dir: "output/section02",
    format: "umd",
    name: "MBundle",
  },
  plugins: [commonjs()],
};
