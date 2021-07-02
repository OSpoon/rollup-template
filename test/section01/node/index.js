const bundle = require("../../../output/section01/node-bundle");
console.log(bundle.add(1, 2));

const { add } = require("../../../output/section01/node-bundle");
console.log(add(2, 3));
