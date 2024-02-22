function sumPrimeNPrime(input) {
  let sumPrime = 0;
  let sumNprime = 0;

  for (let i = 0; i < input.length; i++) {

    let number = Number(input[i]);

    if (!isNaN(number)) {
      if (number < 0) {
        console.log("Number is negative.");
      } else {
        let isPrime = true;

        for (let j = 2; j * j <= number; j++) {
          if (number % j === 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          sumPrime += number;
        } else {
          sumNprime += number;
        }
      }
    }
  }

  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNprime}`);
}