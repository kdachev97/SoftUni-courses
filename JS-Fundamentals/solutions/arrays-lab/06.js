function evenOddSubtraction(array) {
  let sumEven = 0;
  sumOdd = 0;
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (number % 2 === 0) {
      sumEven += number;
    } else {
      sumOdd += number;
    }
  }
  console.log(sumEven - sumOdd);
}