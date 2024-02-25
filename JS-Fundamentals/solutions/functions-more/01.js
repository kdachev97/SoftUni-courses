function carWash(array) {
  let percentage = 0;

  for (command of array) {
    if (command === 'soap') {
      percentage += 10;
    } else if (command === 'water') {
      percentage *= 1.2;
    } else if (command === 'vacuum cleaner') {
      percentage *= 1.25;
    } else if (command === 'mud') {
      percentage -= 0.1 * percentage;
    }
  }

  console.log(`The car is ${percentage.toFixed(2)}% clean.`)
}