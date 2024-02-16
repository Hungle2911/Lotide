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
//takeUntil function
const takeUntil = function(array, callback) {
  const newArr = []
  for (const item of array) {
    if (!callback(item)) {
     newArr.push(item)
    } else break
  } return newArr
}
module.exports = takeUntil
// //Testing 
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual([ 1, 2, 5, 7, 2 ], results1)