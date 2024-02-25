function diagonalAttack(array) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let matrix = array.map(row => row.split(' ').map(Number));

  for (let i = 0; i < matrix.length; i++) {
    leftDiagonal += matrix[i][i];

    let reverseIndex = matrix.length - 1 - i;
    rightDiagonal += matrix[i][reverseIndex];
  }

  if (leftDiagonal === rightDiagonal) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i !== j && i !== matrix.length - 1 - j) {
          matrix[i][j] = leftDiagonal;
        }
      }
    }

    for (let row of matrix) {
      console.log(row.join(' '));
    }
  } else {
    for (let row of array) {
      console.log(row);
    }
  }
}