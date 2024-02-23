const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected} `);
};
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false
  } else for (let key in object1) {
    if (object1.hasOwnProperty(key)) {
      if (!object2.hasOwnProperty(key)) {
        return false;  // Check if both objects have the same keys
      }
      if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
         if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        // Check if values are equal for arrays
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        // Check if values are equal for other types
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
  }
  return true;
}
}
module.exports = eqObjects
