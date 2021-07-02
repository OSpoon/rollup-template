import { utils } from "./utils";

export const add = (x: any, y: any) => {
  const result = x + y;
  utils.log(`add函数执行的结果是: ${result}`);
  return result;
};

(() => {
  utils.log(new Date().toLocaleTimeString());
})();
