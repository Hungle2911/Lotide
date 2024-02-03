const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};
const eqArrays = (firstArr, secondArr) => {
  if (firstArr.toString() === secondArr.toString()) {
    return true
  } else {
    return false
  }
}
//Test
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS