function firstAndLast(array) {
  let k = array[0];
  let forward = array.slice(1, k + 1);
  let backwards = array.slice(array.length - k);

  console.log(forward.join(' '));
  console.log(backwards.join(' '));
}