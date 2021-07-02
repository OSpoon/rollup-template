'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const load = () => {
  Promise.resolve().then(function () { return require('./request-a5485c3c.js'); }).then(({ default: post }) => {
    console.log("模块加载: >>", post);
  });
};

exports.load = load;
