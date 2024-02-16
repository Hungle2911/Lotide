// const assertEqual = require('../assertEqual')
// const tail = require('../tail')
// // Test Case 1: Check the returned array elements
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// // Test Case:
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(["test"]).length, 0) // tail of array with one element only should be empty
// assertEqual(tail([]).length, 0) // tail of an empty array should also be empty
const tail = require('../tail')
const assert = require('chai').assert

describe("#tail", () => {
  it("returns 2 for the last two elements", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words).length, 2);
  });
  it("tail of an empty array should also be empty", () => {
    assert.strictEqual(tail([]).length, 0);
  });
});