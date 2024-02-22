function figureArea(input) {
  let figureType = input[0];
  if (figureType === 'square') {
    let side = Number(input[1]);
    let area = side * side;
    console.log(area.toFixed(3));
  } else if (figureType === 'rectangle') {
    let side1 = Number(input[1]);
    let side2 = Number(input[2]);
    let area = side1 * side2;
    console.log(area.toFixed(3));
  } else if (figureType === 'circle') {
    let radius = Number(input[1]);
    let area = radius * radius * Math.PI;
    console.log(area.toFixed(3));
  } else if (figureType === 'triangle') {
    let side = Number(input[1]);
    let height = Number(input[2]);
    let area = (side * height) / 2;
    console.log(area.toFixed(3));
  }
}