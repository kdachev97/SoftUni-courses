function searchForNumber(array, secondArray) {
  let newArray = [];
  let numOfElements = secondArray[0];
  let elementsToDelete = secondArray[1];
  let numTosearchFor = secondArray[2];
  let numCount = 0;

  for (let i = 0; i < numOfElements; i++) {
    let element = array[i];
    newArray.push(element);
  }

  for (let j = 0; j < elementsToDelete; j++) {
    newArray.shift();
  }

  for (let k = 0; k < newArray.length; k++) {
    if (newArray[k] === numTosearchFor) {
      numCount++;
    }
  }

  console.log(`Number ${numTosearchFor} occurs ${numCount} times.`);
}