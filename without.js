const without = (source, itemsToRemove) => {
  let newArray = []
  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
} 
module.exports = without

