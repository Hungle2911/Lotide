// const assertArraysEqual = require('../assertArraysEqual')
// const middle = require('../middle')
// //Test 
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[2, 3])
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
const middle = require('../middle')
const assert = require('chai').assert

describe("#middle", () => {
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
});