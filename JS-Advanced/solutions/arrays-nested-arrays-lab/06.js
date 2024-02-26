function biggerHalf(array) {
  array.sort((a, b) => a - b);
  let middleIndex = Math.floor(array.length / 2);
  let secondHalf = array.splice(middleIndex, array.length - middleIndex);

  return secondHalf;
}