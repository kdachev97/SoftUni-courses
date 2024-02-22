function graduation(input) {
  let name = input[0];
  let averageMark = 0;
  let i = 1;
  let markSum = 0;
  let marksBelow4 = 0;

  while (i < input.length) {
    let mark = Number(input[i]);
    markSum += mark;
    i++;

    if (mark < 4) {
      marksBelow4++;
    }

    if (marksBelow4 >= 2) {
      console.log(`${name} has been excluded at ${i - 2} grade`);
      return;
    }
  }

  averageMark = markSum / (input.length - 1);
  console.log(`${name} graduated. Average grade: ${averageMark.toFixed(2)}`);
}