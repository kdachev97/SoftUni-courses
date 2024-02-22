function specialNumbers(input) {
  let number = Number(input[0]);
  let result = '';

  for (let i = 1111; i <= 9999; i++) {
    let numStr = i.toString();
    let allDigitsSatisfyCondition = true;

    for (let j = 0; j < numStr.length; j++) {
      if (number % Number(numStr[j]) !== 0) {
        allDigitsSatisfyCondition = false;
        break;
      }
    }

    if (allDigitsSatisfyCondition) {
      result += i + ' ';
    }
  }
  console.log(result);
}