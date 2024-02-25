function condenseArrayToNumber(array) {
  while (array.length > 1) {
    let condensedArray = [];

    for (let i = 0; i < array.length - 1; i++) {
      const sum = array[i] + array[i + 1];
      condensedArray.push(sum);
    }
    array = condensedArray;
  }
  console.log(array[0]);
}