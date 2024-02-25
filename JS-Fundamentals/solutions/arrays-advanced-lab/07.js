function smallestTwoNums(array) {
  let sortedArray = array.sort((a, b) => a - b);
  let result = sortedArray.slice(0, 2);
  console.log(result.join(' '));
}