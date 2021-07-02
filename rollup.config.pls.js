import myExample from "./plugins/rollup-plugin-my-example.js";

export default {
  input: "src/plugins/index.js",
  output: {
    dir: "output/plugins",
    format: "es",
  },
  plugins: [myExample()],
};
