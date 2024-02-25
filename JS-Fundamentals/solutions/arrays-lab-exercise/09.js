function magicSum(array, checkSum) {
  let sum = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum === checkSum) {
        console.log(`${array[i]} ${array[j]}`);
      }
    }
  }
}