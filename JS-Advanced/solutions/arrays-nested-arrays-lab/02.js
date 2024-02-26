function lastNumberSequence(n, k) {
  let array = [1];
  for (let i = 1; i < n; i++) {
    array[i] = sumLastK(array, k);
  }
  function sumLastK(array = result, k) {

    k = array.length > k ? k : array.length;

    let sum = 0;

    for (let i = 1; i <= k; i++) {
      sum += array[array.length - i];
    }

    return sum;
  }

  return array;
}