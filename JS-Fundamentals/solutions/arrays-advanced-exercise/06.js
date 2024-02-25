function bombNumbers(array, specialNumArray) {
  let specialNumber = specialNumArray[0];
  let power = specialNumArray[1];

  while (array.includes(specialNumber)) {
    let specialNumberIndex = array.indexOf(specialNumber);
    let start = Math.max(0, specialNumberIndex - power);
    let deleteCount = Math.min(power * 2 + 1, array.length - start);
    array.splice(start, deleteCount);
  }

  let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum);
}