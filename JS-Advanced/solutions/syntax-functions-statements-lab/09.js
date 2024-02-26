function squareOfStars(number) {
  let result = '';
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      result += `* `;
    }
    result += `\n`;
  }

  console.log(result);
}