function softUniReception(input) {
  let employee1 = Number(input.shift());
  let employee2 = Number(input.shift());
  let employee3 = Number(input.shift());
  let people = Number(input.shift());

  let answersPerHour = employee1 + employee2 + employee3;
  let neededHours = 0;

  while (people > 0) {
    neededHours++;
    people -= answersPerHour;

    if (neededHours % 4 === 0) {
      neededHours++;
    }
  }

  console.log(`Time needed: ${neededHours}h.`);
}

softUniReception(['5', '6', '4', '20'])

function arrayModifier(input) {

  let arrayOfNumbers = input.shift().split(' ').map(Number);

  for (let index = 0; index < input.length; index++) {
    let [command, index1, index2] = input[index].split(' ');

    switch (command) {
      case 'swap':
        let temp = arrayOfNumbers[index1];
        arrayOfNumbers[index1] = arrayOfNumbers[index2];
        arrayOfNumbers[index2] = temp;
        break;
      case 'multiply':
        let result = arrayOfNumbers[index1] * arrayOfNumbers[index2];
        arrayOfNumbers[index1] = result;
        break;
      case 'decrease':
        arrayOfNumbers = arrayOfNumbers.map(n => n - 1);
        break;
    }

    if (command === 'end') {
      break;
    }
  }

  console.log(arrayOfNumbers.join(', '));
}

arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
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

function theLift(input) {
  let passengers = Number(input.shift());
  let wagons = input.shift().split(' ').map(Number);

  for (let index = 0; index < wagons.length; index++) {
    let currentWagon = wagons[index];

    while (currentWagon !== 4) {
      currentWagon++;
      passengers--;
      if (passengers === 0) {
        break;
      }
    }

    wagons[index] = currentWagon;
    if (passengers === 0) {
      break;
    }
  }

  let isFull = wagons.filter(w => w !== 4);

  if (passengers === 0 && isFull.length === 0) {
    console.log(wagons.join(' '));
  } else if (isFull.length !== 0) {
    console.log('The lift has empty spots!');
    console.log(wagons.join(' '));
  } else {
    console.log(`There isn't enough space! ${passengers} people in a queue!`);
    console.log(wagons.join(' '));
  }
}

theLift(['15',
  '0 0 0 0'])

function memoryGame(input) {
  let board = input.shift().split(' ');
  let command = input.shift();
  let turn = 1;

  while (command !== 'end' && board.length > 0) {
    let [firstIndex, secondIndex] = command.split(' ').map(Number);
    let areValidIndices = (firstIndex < 0 || firstIndex >= board.length) || (secondIndex < 0 || secondIndex >= board.length) || firstIndex === secondIndex;

    if (areValidIndices) {
      console.log('Invalid input! Adding additional elements to the board');

      let middleIndex = board.length / 2;
      let fill = `-${turn}a`;
      board.splice(middleIndex, 0, fill, fill);
    } else {
      if (board[firstIndex] === board[secondIndex]) {
        let element = board[firstIndex];
        console.log(`Congrats! You have found matching elements - ${element}!`);
        board = board.filter(e => e !== element)
      } else {
        console.log('Try again!');
      }
    }
    if (board.length === 0) {
      console.log(`You have won in ${turn} turns!`);
    }
    command = input.shift();
    turn++;
  }
  if (board.length > 0) {
    console.log('Sorry you loose :(');
    console.log(board.join(' '));
  }
}

memoryGame([
  "1 1 2 2 3 3 4 4 5 5",
  "1 0",
  "-1 0",
  "1 0",
  "1 0",
  "1 0",
  "end"
])

function manOWar(input) {
  let pirate = input.shift().split('>').map(Number);
  let warship = input.shift().split('>').map(Number);
  let maxHp = Number(input.shift());
  let critical = maxHp * 0.2;

  for (let current of input) {
    let tokens = current.split(' ');
    let command = tokens.shift();

    if (command === 'Retire') {
      break;
    } else if (command === 'Fire') {
      let index = Number(tokens[0]);
      let damage = Number(tokens[1]);

      if (index < 0 || index >= warship.length) {
        continue;
      }

      warship[index] -= damage;
      if (warship[index] <= 0) {
        console.log('You won! The enemy ship has sunken.');
        return;
      }
    } else if (command === 'Defend') {
      let start = Number(tokens[0]);
      let end = Number(tokens[1]);
      let damage = Number(tokens[2]);

      if (start < 0 || start >= pirate.length || end < 0 || end >= pirate.length) {
        continue;
      }

      for (let i = start; i <= end; i++) {
        pirate[i] -= damage;

        if (pirate[i] <= 0) {
          console.log('You lost! The pirate ship has sunken.');
          return;
        }
      }

    } else if (command === 'Repair') {
      let index = Number(tokens[0]);
      let hp = Number(tokens[1]);

      if (index < 0 || index >= pirate.length) {
        continue;
      }

      pirate[index] += hp;
      if (pirate[index] > maxHp) {
        pirate[index] = maxHp;
      }
    } else if (command === 'Status') {
      let damaged = pirate.filter(section => section < critical);
      console.log(`${damaged.length} sections need repair.`);
    }
  }

  let pirateStatus = pirate.reduce((sum, value) => sum + value, 0);
  let warshipStatus = warship.reduce((sum, value) => sum + value, 0);
  console.log(`Pirate ship status: ${pirateStatus}`);
  console.log(`Warship status: ${warshipStatus}`);
}

manOWar((["12>13>11>20>66",
  "12>22>33>44>55>32>18",
  "70",
  "Fire 2 11",
  "Fire 8 100",
  "Defend 3 6 11",
  "Defend 0 3 5",
  "Repair 1 33",
  "Status",
  "Retire"])
)