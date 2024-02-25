function addOrRemove(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "add") {
      newArray.push(i + 1);
    } else if (array[i] === "remove") {
      newArray.pop();
    }
  }
  if (newArray[0] !== undefined) {
    console.log(newArray.join(' '));
  } else {
    console.log("Empty");
  }
}