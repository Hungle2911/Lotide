// const eqArrays = (a, b) => {
//   if (a.length !== b.length) return false;
//   else {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// };
// const assertArraysEqual = (a, b) => {
//   if (eqArrays(a, b) === false) console.log(`Assertion Failed: ${a} !== ${b}`);
//   else console.log(`Assertion Passed: ${a} === ${b}`);
// };
//  Map function
// const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
module.exports = map
// const results1 = map(words, word => word[0]);
// console.log(results1);
// // Testing
// assertArraysEqual([ 'g', 'c', 't', 'm', 't' ],results1)