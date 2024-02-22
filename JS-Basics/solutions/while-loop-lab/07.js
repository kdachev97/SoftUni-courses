function smallestNumber(input) {
  let i = 0;
  let smallestNumber = Number.POSITIVE_INFINITY;

  while (i < input.length) {
    let number = Number(input[i]);
    i++;

    if (number === "Stop") {
      break;
    }

    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  console.log(smallestNumber);
}