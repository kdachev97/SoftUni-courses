function rounding(numToRound, precision) {
  if (precision > 15) {
    precision = 15;
  }

  let roundedNumber = numToRound.toFixed(precision);
  console.log(parseFloat(roundedNumber));
}