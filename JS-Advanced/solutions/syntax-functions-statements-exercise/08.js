function validityChecker(x1, y1, x2, y2) {
  let x = 0;
  let y = 0;

  let distance1 = Math.sqrt(Math.pow((x1 - x), 2) + Math.pow((y1 - y), 2));
  let distance2 = Math.sqrt(Math.pow((x2 - x), 2) + Math.pow((y2 - y), 2));
  let distance3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

  if (Number.isInteger(distance1)) {
    console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
  }

  if (Number.isInteger(distance2)) {
    console.log(`{${x2}, ${y2}} to {${x}, ${y}} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {${x}, ${y}} is invalid`);
  }

  if (Number.isInteger(distance3)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}