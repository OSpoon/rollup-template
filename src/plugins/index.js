import { log } from "./utils.js";

export const add = (x, y) => {
  const result = x + y;
  log(`add函数执行的结果是: ${result}`);
  return result;
};

(() => {
  log(new Date().toLocaleTimeString());
})();
