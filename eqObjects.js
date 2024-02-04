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
// Test
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject)) // => false
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)) // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)) // => false