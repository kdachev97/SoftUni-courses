function division(number) {
  let biggestDivisor = 0;

  if (number % 10 === 0) {
    biggestDivisor = 10;
  } else if (number % 7 === 0) {
    biggestDivisor = 7;
  } else if (number % 6 === 0) {
    biggestDivisor = 6;
  } else if (number % 3 === 0) {
    biggestDivisor = 3;
  } else if (number % 2 === 0) {
    biggestDivisor = 2;
  } else {
    console.log("Not divisible");
  }

  if (biggestDivisor !== 0) {
    console.log(`The number is divisible by ${biggestDivisor}`);
  }

}