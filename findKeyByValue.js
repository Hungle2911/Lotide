// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
// };
// Implement the function findKeyByValue 
const findKeyByValue = (object, value) => {
  for (const obj in object) {
    if (object[obj] === value) {
      return obj
    } 
  }
}
module.exports = findKeyByValue
// // Test
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);