// const eqArrays = (firstArr, secondArr) => {
//   if (firstArr.toString() === secondArr.toString()) {
//     return true
//   } else {
//     return false
//   }
// }
const eqArrays = function(array1, array2) {
  // Check if both arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }
  // Check each element for equality
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  // If all elements are equal, return true
  return true;
};
module.exports = eqArrays