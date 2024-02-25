function intOrFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let rounded = Math.round(sum);
  if (sum === rounded) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}