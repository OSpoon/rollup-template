export const load = () => {
  import("./request.js").then(({ default: post }) => {
    console.log("模块加载: >>", post);
  });
};
