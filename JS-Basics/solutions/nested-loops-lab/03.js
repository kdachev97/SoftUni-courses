function combinations(input) {
  let result = Number(input[0]);
  let counter = 0;

  for (let x1 = 0; x1 <= result; x1++) {
    for (let x2 = 0; x2 <= result; x2++) {
      for (let x3 = 0; x3 <= result; x3++) {
        if (x1 + x2 + x3 === result) {
          counter++
        }
      }
    }
  }
  console.log(counter);
}