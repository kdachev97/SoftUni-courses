function numberModification(number) {
  let array = number.toString().split("");
  let sum = 0;

  for (element of array) {
    let digit = Number(element);
    sum += digit;
  }

  let average = sum / array.length;

  while (average < 5) {
    array.push('9');
    sum += 9;
    average = sum / array.length;
  }

  console.log(array.join(""));
}