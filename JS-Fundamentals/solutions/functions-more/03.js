function pointsValidation(array) {
  let x1 = array[0];
  let y1 = array[1];
  let x2 = array[2];
  let y2 = array[3];
  let xTest = 0;
  let yTest = 0;


  let distance1 = Math.sqrt(Math.pow(x1 - xTest, 2) + Math.pow(y1 - yTest, 2));
  let distance2 = Math.sqrt(Math.pow(x2 - xTest, 2) + Math.pow(y2 - yTest, 2));
  let distance3 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));


  if (Number.isInteger(distance1)) {
    console.log(`{${x1}, ${y1}} to {${xTest}, ${yTest}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${xTest}, ${yTest}} is invalid`);
  }

  if (Number.isInteger(distance2)) {
    console.log(`{${x2}, ${y2}} to {${xTest}, ${yTest}} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {${xTest}, ${yTest}} is invalid`);
  }

  if (Number.isInteger(distance3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}