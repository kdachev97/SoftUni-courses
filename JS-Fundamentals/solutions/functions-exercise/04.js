function oddAndEvenSum(number) {
  let array = number.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    let num = Number(array[i]);
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}