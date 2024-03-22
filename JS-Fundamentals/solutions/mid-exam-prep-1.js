function blackFlag(input) {
  let plunderDays = Number(input[0]);
  let dailyPlunder = Number(input[1]);
  let expectedPlunder = Number(input[2]);

  let totalPlunder = 0;

  for (let day = 1; day <= plunderDays; day++) {
    totalPlunder += dailyPlunder;

    if (day % 3 === 0) {
      totalPlunder += dailyPlunder * 0.5;
    }

    if (day % 5 === 0) {
      totalPlunder -= totalPlunder * 0.3;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let leftPercent = totalPlunder / expectedPlunder * 100;
    console.log(`Collected only ${leftPercent.toFixed(2)}% of the plunder.`);
  }
}

blackFlag([
  "10",
  "20",
  "380"
])

function shoppingList(input) {
  let list = input.shift().split('!');

  let command = input.shift();

  while (command !== 'Go Shopping!') {
    let [action, firstItem, secondItem] = command.split(' ');

    command = input.shift();

    switch (action) {
      case 'Urgent':
        if (!list.includes(firstItem)) {
          list.unshift(firstItem);
        }
        break;
      case 'Unnecessary':
        let itemIndex = list.indexOf(firstItem);
        if (itemIndex !== -1) {
          list.splice(itemIndex, 1);
        }
        break;
      case 'Correct':
        let updateIndex = list.indexOf(firstItem);
        if (updateIndex !== -1) {
          list[updateIndex] = secondItem;
        }
        break;
      case 'Rearrange':
        let removeIndex = list.indexOf(firstItem);
        if (removeIndex !== -1) {
          let element = list[removeIndex];
          list.splice(removeIndex, 1);
          list.push(element);
        }
        break;
    }
  }
  console.log(list.join(', '));
}

shoppingList([
  'Tomatoes!Potatoes!Bread',
  'Unnecessary Milk',
  'Urgent Tomatoes',
  'Go Shopping!'
])

function movingTarget(input) {
  let targets = input.shift().split(' ').map(Number);

  let command = input.shift();

  while (command !== 'End') {
    let [action, index, value] = command.split(' ');

    index = Number(index);
    value = Number(value);

    switch (action) {
      case 'Shoot':
        if (index >= 0 && index < targets.length) {
          targets[index] -= value;
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;
      case 'Strike':
        if (index - value >= 0 && index + value < targets.length) {
          targets.splice(index - value, value * 2 + 1);
        } else {
          console.log('Strike missed!');
        }
        break;
      case 'Add':
        if (index >= 0 && index < targets.length) {
          targets.splice(index, 0, value);
        } else {
          console.log('Invalid placement!');

        }
        break;
    }

    command = input.shift();
  }
  console.log(targets.join('|'));
}

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End"
])

function shootForTheWin(input) {
  let targets = input.shift().split(' ').map(Number);
  let count = 0;
  let command = input.shift();

  while (command !== "End") {
    let indexOfTarget = Number(command);

    if (indexOfTarget >= 0 && indexOfTarget < targets.length) {
      for (let i = 0; i < targets.length; i++) {
        let currentTarget = targets[indexOfTarget];

        if (i !== indexOfTarget && targets[i] !== -1) {
          if (targets[i] > currentTarget) {
            targets[i] -= currentTarget;
          } else {
            targets[i] += currentTarget;
          }
        }
      }
      targets[indexOfTarget] = -1;
      count++;
    }
    command = input.shift();
  }
  console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}

shootForTheWin([
  "24 50 36 70",
  "0",
  "4",
  "3",
  "1",
  "End"
])