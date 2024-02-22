function sumNumbers(input) {
  let initialNumber = Number(input[0]);
  let i = 1;
  let totalNumber = 0;

  while (initialNumber > totalNumber) {
    totalNumber += Number(input[i]);
    i++;
  }
  console.log(totalNumber);
}