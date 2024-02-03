const eqArrays = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = (a, b) => {
  if (eqArrays(a, b) === false) console.log(`Assertion Failed: ${a} !== ${b}`);
  else console.log(`Assertion Passed: ${a} === ${b}`);
};
const flatten = (arr) => {
  let result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
}
console.log(flatten([1, 2, [3, 4], 5, [6]]));