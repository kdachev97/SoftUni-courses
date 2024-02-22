function accountBalance(input) {
  let totalSum = 0;
  let i = 0;

  while (i < input.length) {
    let number = Number(input[i]);
    i++

    if (number < 0) {
      console.log('Invalid operation!')
      break;
    }

    if (!isNaN(number)) {
      totalSum += number;
      console.log(`Increase: ${number.toFixed(2)}`);
    }
  }
  console.log(`Total: ${totalSum.toFixed(2)}`)
}