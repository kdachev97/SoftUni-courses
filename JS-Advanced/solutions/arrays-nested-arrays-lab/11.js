function equalNeighbours(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Check right neighbor in the same row
      if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
        count++;
      }
      // Check lower neighbor in the next row
      if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
        count++;
      }
    }
  }

  console.log(count);
}