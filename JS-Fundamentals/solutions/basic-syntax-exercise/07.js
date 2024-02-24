function triangleOfNumbers(number) {
  let row = "";

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      if (j === i) {
        row += `${i}\n`;
      } else {
        row += `${i} `;
      }
    }
  }

  console.log(row);
}