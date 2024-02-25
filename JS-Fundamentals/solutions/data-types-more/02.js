function primeNumberCheck(number) {
  let isPrime = true;
  for (let divider = 2; divider <= Math.sqrt(number); divider++) {
    if (number % divider === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime);
}