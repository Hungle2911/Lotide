// Implement the function findKeyByValue 
const findKeyByValue = (object, value) => {
  for (const obj in object) {
    if (object[obj] === value) {
      return obj
    } 
  }
}
module.exports = findKeyByValue