var MBundle = (function (exports) {
  'use strict';

  function log(string) {
    console.log("输出 :>> ", string);
  }

  const add = (x, y) => {
    const result = x + y;
    log(`add函数执行的结果是: ${result}`);
    return result;
  };

  (() => {
    log(new Date().toLocaleTimeString());
  })();

  exports.add = add;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
