function reversedArray(n, array) {

  let result = [];
  for (let i = n - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  console.log(result.join(' '));
}