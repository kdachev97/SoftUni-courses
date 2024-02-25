function sequences(arrays) {
  let arrayOfObjects = [];

  for (let array of arrays) {
    let individualArray = JSON.parse(array);
    individualArray.sort((a, b) => b - a);

    let isDuplicate = arrayOfObjects.some(arr => arraysAreEqual(arr, individualArray));

    if (!isDuplicate) {
      arrayOfObjects.push(individualArray);
    }
  }

  arrayOfObjects.sort((a, b) => a.length - b.length);

  for (let result of arrayOfObjects) {
    console.log(`[${result.join(', ')}]`);
  }

  function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}