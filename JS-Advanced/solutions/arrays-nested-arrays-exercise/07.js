function sortingNumbers(array) {
  array.sort((a, b) => a - b);
  const result = [];

  while (array.length !== 0) {
    result.push(array.shift(), array.pop());
  }
  return result;
}