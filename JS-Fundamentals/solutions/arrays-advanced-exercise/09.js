function gladiatorInventory(array) {
  let startingArray = array[0].split(' ');

  for (let i = 1; i < array.length; i++) {

    let modifiedArray = (array[i].split(' '));
    let command = modifiedArray[0];
    let item = modifiedArray[1];
    if (command === "Buy" && !startingArray.includes(item)) {
      startingArray.push(item);
    }
    if (command === "Trash" && startingArray.includes(item)) {
      startingArray = startingArray.filter((itemToDelete) => {
        if (itemToDelete !== item) {
          return true;
        } else {
          return false;
        }
      })
    }
    if (command === "Repair" && startingArray.includes(item)) {
      startingArray = startingArray.filter((itemToUpdate) => {
        if (itemToUpdate !== item) {
          return true;
        } else {
          return false;
        }
      });
      startingArray.push(item);
    }

    if (command === "Upgrade") {
      let expansionItem = item.split('-');
      if (startingArray.includes(expansionItem[0])) {
        const baseitemIndex = startingArray.indexOf(expansionItem[0]);
        startingArray.splice(baseitemIndex + 1, 0, expansionItem.join(':'));
      }
    }
  }
  console.log(startingArray.join(' '));
}