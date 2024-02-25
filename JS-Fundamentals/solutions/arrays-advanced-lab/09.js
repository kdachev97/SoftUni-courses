function arrayManipulations(commands) {
  let array = commands.shift().split(' ').map(Number);
  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(' ');
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    switch (command) {
      case 'Add':
        add(firstNum);
        break;
      case 'Remove':
        remove(firstNum);
        break;
      case 'RemoveAt':
        removeAt(firstNum);
        break;
      case 'Insert':
        insert(firstNum, secondNum);
        break;
    }
  }
  function add(el) {
    array.push(el);
  }
  function remove(num) {
    array = array.filter(el => el !== num);
  }
  function removeAt(index) {
    array.splice(index, 1);
  }
  function insert(num, index) {
    array.splice(index, 0, num);
  }
  console.log(array.join(' '));
}