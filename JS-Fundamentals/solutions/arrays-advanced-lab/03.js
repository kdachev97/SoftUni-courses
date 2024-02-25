function firstAndLast(array) {
  let k = array.shift();
  let forward = [];
  let backwards = [];

  for (let i = 0; i < k; i++) {
    forward.push(array[i]);
  }

  for (let i = array.length - k; i < array.length; i++) {
    backwards.push(array[i]);
  }

  console.log(forward.join(' '));
  console.log(backwards.join(' '));
}