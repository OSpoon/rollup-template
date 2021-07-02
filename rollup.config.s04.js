import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/section04/index.js",
  output: [
    {
      file: "output/section04/bundle.js",
      format: "umd",
      name: "MBundle",
    },
    {
      file: "output/section04/bundle.min.js",
      format: "umd",
      name: "MBundle",
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
