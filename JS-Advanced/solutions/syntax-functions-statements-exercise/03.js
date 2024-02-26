function sameNumbers(input) {
  const string = input.toString();
  let sum = Number(string[0]);
  let allEqual = true;
  for (let i = 1; i < string.length; i++) {

    if (string[i] !== string[i - 1]) {
      allEqual = false;
    }

    sum += Number(string[i]);
  }
  console.log(allEqual);
  console.log(sum);
}