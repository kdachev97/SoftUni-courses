function maxNumber(array) {
  let maxNumsArray = [];
  for (let i = 0; i < array.length; i++) {
    let isTopInteger = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) {
        isTopInteger = false;
        break;
      } else if (array[j] === array[i]) {
        isTopInteger = false;
      }
    }
    if (isTopInteger) {
      maxNumsArray.push(array[i]);
    }
  }
  console.log(maxNumsArray.join(' '));
}