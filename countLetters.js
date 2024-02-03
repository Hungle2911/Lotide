const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};
// Create a function called countLetters.
const countLetters = (sentence) => {
  let result = {}
  let arr = sentence.split('')
  for (const item of arr) {
    result[item] = (result[item] || 0) + 1;
  }
  return result
}
console.log(countLetters('sentences'));