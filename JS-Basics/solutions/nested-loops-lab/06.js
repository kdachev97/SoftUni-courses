function building(input) {
  let floors = Number(input[0]);
  let rooms = Number(input[1]);

  for (let i = floors; i >= 1; i--) {
    let floorRow = '';
    for (let j = 0; j < rooms; j++) {

      if (i !== floors) {
        if (i % 2 === 0) {
          floorRow += (`O${i}${j} `);
        } else {
          floorRow += (`A${i}${j} `);
        }
      } else {
        floorRow += (`L${i}${j} `);
      }
    }
    console.log(floorRow);
  }
}