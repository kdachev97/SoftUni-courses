function rotateArray(array) {
  let rotations = Number(array.pop());
  for (let i = 1; i <= rotations; i++) {
    array.unshift(array.pop());
  }
  console.log(array.join(' '));
}