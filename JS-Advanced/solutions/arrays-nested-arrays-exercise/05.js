function extractIncreasingSequence(array) {
  let biggest = Number.NEGATIVE_INFINITY;
  const result = array.filter((el) => {
    if (el >= biggest) {
      biggest = el;
      return true;
    } else {
      return false;
    }
  })

  return result;
}