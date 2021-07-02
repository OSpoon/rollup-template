// 通过import到commonjs模块
import utils from "./utils.js";

export const add = (x, y) => {
  const result = x + y;
  utils.log(`add函数执行的结果是: ${result}`);
  return result;
};

(() => {
  utils.log(new Date().toLocaleTimeString());
})();
