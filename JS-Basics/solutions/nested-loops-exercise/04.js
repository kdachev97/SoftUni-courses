function train(input) {
  let numOfjudges = input[0];
  let i = 1;
  let numOfAverages = 0;
  let sumOfAverages = 0;

  while (i < input.length) {
    let presentation = input[i++];
    let gradesSum = 0;

    while (!isNaN(input[i])) {
      gradesSum += Number(input[i++]);
    }


    let average = gradesSum / numOfjudges;
    sumOfAverages += average;
    numOfAverages++;

    console.log(`${presentation} - ${average.toFixed(2)}.`);

    if (input[i] === "Finish") {
      break;
    }
  }
  console.log(`Student's final assessment is ${(sumOfAverages / numOfAverages).toFixed(2)}.`);
}