function equalSums(input) {
  let number1 = Number(input[0]);
  let number2 = Number(input[1]);

  let printLine = '';

  for (let n1 = number1; n1 <= number2; n1++) {
    let currentNum = "" + n1;
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < currentNum.length; i++) {
      let currentDigit = Number(currentNum[i]);
      if (i % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (evenSum === oddSum) {
      printLine += " " + n1;
    }
  }
  console.log(printLine);
}