function amazingNumbers(number) {
  let numAsString = number.toString();
  let sum = 0;
  for (let i = 0; i < numAsString.length; i++) {
    let currentDigit = Number(numAsString[i]);
    sum += currentDigit;
  }
  let sumAsString = sum.toString();
  let hasNine = false;
  for (let i = 0; i < sumAsString.length; i++) {
    if (sumAsString[i] === '9') {
      hasNine = true;
      break;
    }
  }
  console.log(`${number} Amazing? ${hasNine ? 'True' : 'False'}`);
}