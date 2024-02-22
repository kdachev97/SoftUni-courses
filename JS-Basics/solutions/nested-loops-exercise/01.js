function numberPyramid(input) {
  let numbers = Number(input[0]);

  let currentNumber = 1;
  let isBigger = false;
  let printCurrentLine = "";

  for (let rows = 1; rows <= numbers; rows++) {
    for (let numCol = 1; numCol <= rows; numCol++) {
      if (currentNumber > numbers) {
        isBigger = true;
        break;
      }
      printCurrentLine += currentNumber + " ";
      currentNumber++;
    }
    console.log(printCurrentLine);
    printCurrentLine = "";
    if (isBigger) {
      break;
    }
  }
}
