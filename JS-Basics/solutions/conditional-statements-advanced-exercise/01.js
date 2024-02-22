function cinema(input) {
  let screening = input[0];
  let rows = Number(input[1]);
  let columns = Number(input[2]);
  let income = 0;
  switch (screening) {
    case 'Premiere':
      income = rows * columns * 12;
      break;
    case 'Normal':
      income = rows * columns * 7.5;
      break;
    case 'Discount':
      income = rows * columns * 5;
      break;
  }
  console.log(`${income.toFixed(2)} leva`);
}