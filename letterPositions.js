const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') {
      if (!results[char]) {
        // If the character is not already a key in results, create an array for it
        results[char] = [];
      }
      // Push the current index to the array for the current character
      results[char].push(i);
    }
  }
  return results;
};
// Test
console.log(letterPositions('lighthouse in the house'));
const result = letterPositions('hello');
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['e'], [1]);
assertArraysEqual(result['l'], [2, 3]);
assertArraysEqual(result['o'], [4]);