const flatten = (arr) => {
  let result = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      // If the element is an array, recursively flatten it
      result = result.concat(flatten(element));
    } else {
      // If the element is not an array, add it to the result
      result.push(element);
    }
  }

  return result;
}
module.exports = flatten