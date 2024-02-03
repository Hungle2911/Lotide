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
// Middle function
const middle = (arr) => {
  let result = []
  if (arr.length <= 2) {
    return result
  } else if (arr.length % 2 !== 0) {
    result.push(arr[(arr.length - 1) / 2])
    return result
  } else {
    result.push(arr[(arr.length / 2) - 1])
    result.push(arr[(arr.length / 2)])
    return result
  }
}
console.log(middle([1, 2, 3, 4, 5]))
