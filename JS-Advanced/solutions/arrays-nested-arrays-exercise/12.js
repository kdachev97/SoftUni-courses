function orbit(array) {
  let width = array[0];
  let height = array[1];
  let starWidth = array[2];
  let starHeight = array[3];

  let matrix = [];
  for (let i = 0; i < width; i++) {
    matrix.push([]);
  }

  for (let row = 0; row < width; row++) {
    for (let col = 0; col < height; col++) {
      matrix[row][col] = Math.max(Math.abs(row - starWidth), Math.abs(col - starHeight)) + 1;
    }
  }

  console.log(matrix.map(row => row.join(" ")).join("\n"));
}