function nationalCourt(input) {
  let element1 = Number(input[0]);
  let element2 = Number(input[1]);
  let element3 = Number(input[2]);
  let efficiency = element1 + element2 + element3;
  let people = Number(input[3]);
  let hoursPassed = 0;

  while (people > 0) {
    hoursPassed++;

    if (hoursPassed % 4 !== 0) {
      people -= efficiency;
    }
  }

  console.log(`Time needed: ${hoursPassed}h.`)
}

nationalCourt(['5', '6', '4', '20'])

function shoppingList(input) {
  let groceries = input.shift().split('!');

  let line = input.shift();

  while (line !== 'Go Shopping!') {
    let [command, item, newItem] = line.split(' ');

    switch (command) {
      case 'Urgent':
        urgent(groceries, item);
        break;
      case 'Unnecessary':
        unnecessary(groceries, item);
        break;
      case 'Correct':
        correct(groceries, item, newItem);
        break;
      case 'Rearrange':
        rearrange(groceries, item);
        break;

    }

    line = input.shift();
  }

  console.log(groceries.join(', '));

  function urgent(list, item) {
    if (!list.includes(item)) {
      list.unshift(item);
    }
  }

  function unnecessary(list, item) {
    if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  function correct(list, item, newItem) {
    if (list.includes(item)) {
      let index = list.indexOf(item);
      list[index] = newItem;
    }
  }

  function rearrange(list, item) {
    if (list.includes(item)) {
      let index = list.indexOf(item);
      list.splice(index, 1);
      list.push(item);
    }
  }
}

shoppingList([
  'Tomatoes!Potatoes!Bread',
  'Unnecessary Milk',
  'Urgent Tomatoes',
  'Go Shopping!'
])

function heartDelivery(input) {
  let houses = input.shift().split('@').map(Number);
  let index = 0;

  for (let line of input) {
    if (line === 'Love!') {
      break;
    }

    let offset = Number(line.split(' ')[1]);
    index += offset;

    if (index >= houses.length) {
      index = 0;
    }

    if (houses[index] === 0) {
      console.log(`Place ${index} already had a Valentine's day!`);
    } else {
      houses[index] -= 2;
      if (houses[index] === 0) {
        console.log(`Place ${index} has Valentine's day.`);
      }
    }
  }

  console.log(`Cupid's last position was ${index}.`);
  let missed = houses.filter(x => x > 0).length;
  if (missed === 0) {
    console.log('Mission was successful.');
  } else {
    console.log(`Cupid has failed ${missed} places.`);
  }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!'])