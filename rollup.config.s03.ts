import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/section03/index.ts",
  output: {
    dir: "output/section03",
    format: "umd",
    name: "MBundle",
  },
  plugins: [typescript()],
};
