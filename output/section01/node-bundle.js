'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const add = (x, y) => {
  const result = x + y;
  log(`add函数执行的结果是: ${result}`);
  return result;
};

function log(string) {
  console.log("输出 :>> ", string);
}

(() => {
  log(new Date().toLocaleTimeString());
})();

exports.add = add;
