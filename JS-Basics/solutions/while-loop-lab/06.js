function biggestNumber(input) {
  let i = 0;
  let biggestNumber = Number.NEGATIVE_INFINITY;

  while (i < input.length) {
    let number = Number(input[i]);
    i++
    if (number === "Stop") {
      break;
    }

    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }
  console.log(biggestNumber);
}