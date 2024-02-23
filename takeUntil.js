//takeUntil function
const takeUntil = function(array, callback) {
  const newArr = []
  for (const item of array) {
    if (!callback(item)) {
     newArr.push(item)
    } else break
  } return newArr
}
module.exports = takeUntil
