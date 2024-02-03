const assertArraysEqual = (a, b) => {
  if (a.length !== b.length) console.log(false);
  else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        console.log(false);
      }
    }
    console.log(true);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3])