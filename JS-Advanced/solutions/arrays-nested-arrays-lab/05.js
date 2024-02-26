function smallestTwoNums(array) {
  array.sort((a, b) => a - b);
  let smallestNums = array.splice(0, 2);
  console.log(smallestNums.join(' '));
}