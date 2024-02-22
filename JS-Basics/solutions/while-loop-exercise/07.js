function moving(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let height = Number(input[2]);
  let freeSpace = width * length * height;
  let spaceTaken = 0;

  let i = 3;

  while (i < input.length) {
    let boxes = input[i];

    if (boxes === "Done") {
      break;
    } else {
      boxes = Number(boxes);
      if (!isNaN(boxes)) {
        spaceTaken += boxes;
      }
    }
    i++;
  }

  if (freeSpace >= spaceTaken) {
    console.log(`${freeSpace - spaceTaken} Cubic meters left.`);
  } else {
    console.log(`No more free space! You need ${spaceTaken - freeSpace} Cubic meters more.`);
  }
}