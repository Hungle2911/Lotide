const eqArrays = require('./eqArrays')
const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b) === false) console.log(`Assertion Failed: ${a} !== ${b}`);
  else console.log(`Assertion Passed: ${a} === ${b}`);
};
module.exports = assertArraysEqual