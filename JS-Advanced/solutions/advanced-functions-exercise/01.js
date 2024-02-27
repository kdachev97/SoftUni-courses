function sortArray(array, sortOrder) {
  return sortOrder === 'asc'
    ? array.sort((a, b) => a - b)
    : array.sort((a, b) => b - a);
}