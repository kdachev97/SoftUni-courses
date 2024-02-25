function mergeArrays(array1, array2) {
  let array3 = [];
  for (let i = 0; i < array1.length; i++) {
    if (i % 2 === 0) {
      let numberElement1 = Number(array1[i]);
      let numberElement2 = Number(array2[i]);
      array3.push(numberElement1 + numberElement2)
    } else {
      array3.push(array1[i] + array2[i]);
    }
  }
  console.log(array3.join(' - '));
}