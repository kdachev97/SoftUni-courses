function sorting(array) {
  let sortedNumbers = [];
  let arrayLength = array.length
  for (let i = 0; i < arrayLength; i++) {
    let number;
    if (i % 2 === 0) {
      number = Math.max(...array);
    } else {
      number = Math.min(...array);
    }
    sortedNumbers.push(number);
    array.splice(array.indexOf(number), 1);
  }
  console.log(sortedNumbers.join(' '));
}