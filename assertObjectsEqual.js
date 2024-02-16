const eqObjects = require('./eqObjects')
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = function(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length){
//     return false
//   } else for (let key in object1) {
//     if (object1.hasOwnProperty(key)) {
//       if (!object2.hasOwnProperty(key)) {
//         return false;  // Check if both objects have the same keys
//       }
//       if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
//          if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
//         // Check if values are equal for arrays
//         if (!eqArrays(object1[key], object2[key])) {
//           return false;
//         }
//       } else {
//         // Check if values are equal for other types
//         if (object1[key] !== object2[key]) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
// }
// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} `);
};
// assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })
module.exports = assertObjectsEqual