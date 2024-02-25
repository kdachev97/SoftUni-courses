function houseParty(input) {
  let list = [];
  for (let command of input) {
    let commandArray = command.split(' ');
    let name = commandArray[0];
    if (commandArray[2] !== "not") {
      if (list.includes(name)) {
        console.log(`${name} is already in the list!`)
      } else {
        list.push(name);
      }
    } else {
      if (list.includes(name)) {
        list = list.filter(nameToDelete => nameToDelete != name);
      } else {
        console.log(`${name} is not in the list!`)
      }
    }
  }
  console.log(list.join('\n'));
}