function negativePositiveNums(array) {
  const result = [];

  for (let num of array) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }

  console.log(result.join('\n'));
}