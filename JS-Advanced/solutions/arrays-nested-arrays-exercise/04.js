function rotateArray(array, numOfRotations) {
  for (let i = 0; i < numOfRotations; i++) {
    array.unshift(array.pop());
  }
  console.log(array.join(' '));
}