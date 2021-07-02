(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MBundle = {}));
}(this, (function (exports) { 'use strict';

  var version = "1.0.0";

  const getVersion = function () {
    return version;
  };

  exports.getVersion = getVersion;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
