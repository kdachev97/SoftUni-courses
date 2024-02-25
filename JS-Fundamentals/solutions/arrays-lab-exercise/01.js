function addAndSubtract(array) {
  let newArray = [];
  let sumArray = 0;
  let sumNewArray = 0;

  for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
    let modifiedElement = array[i] % 2 === 0 ? array[i] + i : array[i] - i;
    sumNewArray += modifiedElement;
    newArray.push(modifiedElement);
  }

  console.log(newArray);
  console.log(sumArray);
  console.log(sumNewArray);
}