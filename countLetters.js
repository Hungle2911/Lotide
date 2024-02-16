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
    if (item !== ' ') {
    result[item] = (result[item] || 0) + 1;
  }
}
  return result
}
module.exports = countLetters
// console.log(countLetters('sentences'));
// const result = countLetters('Lighthouse Labs');
// assertEqual(result['L'], 2);
// assertEqual(result['i'], 1);