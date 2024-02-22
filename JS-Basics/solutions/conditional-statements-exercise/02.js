function bonusPoints(input) {
  let number = Number(input[0]);
  let bonus = 0.0;
  if (number <= 100) {
    bonus = 5;
  } else if (number > 100 && number <= 1000) {
    bonus = 0.2 * number;
  } else if (number > 1000) {
    bonus = 0.1 * number;
  }
  if (number % 2 == 0) {
    bonus += 1;
    console.log(bonus);
    console.log(bonus + number);
  } else if (number % 10 == 5) {
    bonus += 2;
    console.log(bonus);
    console.log(bonus + number);
  } else {
    console.log(bonus);
    console.log(bonus + number);
  }
}