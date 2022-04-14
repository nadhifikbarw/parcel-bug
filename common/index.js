"use strict";

const cjsA = require("./cjsA.js");
const cjsB = require("./cjsB.js");

const registry = {
  cjsA,
  cjsB,
};

const getEntry = (type) => {
  const { entries } = registry[type];
  return {
    entries,
    metadata: "value",
  };
};

exports = module.exports = {
  getEntry,
};
