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
const without = (source, itemsToRemove) => {
  let newArray = []
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
} 
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
