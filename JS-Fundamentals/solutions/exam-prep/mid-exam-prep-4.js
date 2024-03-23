function huntingGames(input) {
  let numOfDays = Number(input.shift());
  let numOfPlayers = Number(input.shift());
  let groupEnergy = Number(input.shift());
  let waterPerDayPerPerson = Number(input.shift());
  let foodPerDayPerPerson = Number(input.shift());

  let totalWater = numOfDays * numOfPlayers * waterPerDayPerPerson;
  let totalFood = numOfDays * numOfPlayers * foodPerDayPerPerson;

  for (let i = 0; i < numOfDays; i++) {
    let energyLostPerDay = Number(input[i]);

    groupEnergy -= energyLostPerDay;

    if (groupEnergy <= 0) {
      console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
      return;
    }

    if ((i + 1) % 2 === 0) {
      let waterNeeded = 0.3 * totalWater;
      totalWater -= waterNeeded;
      groupEnergy *= 1.05;
    }

    if ((i + 1) % 3 === 0) {
      let foodNeeded = totalFood / numOfPlayers;
      totalFood -= foodNeeded;
      groupEnergy *= 1.1;
    }
  }

  console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
}

huntingGames(([
  "12",
  "6",
  "4430",
  "9.8",
  "5.5",
  "620.3",
  "840.2",
  "960.1",
  "220",
  "340",
  "674",
  "365",
  "345.5",
  "212",
  "412.12",
  "258",
  "496"]))

function CoffeeLovers(input) {
  let arrayOfCoffee = input.shift().split(' ');
  let numOfCommands = input.shift();

  for (let i = 0; i < numOfCommands; i++) {
    let tokens = input[i].split(' ');
    let command = tokens[0];

    switch (command) {
      case 'Include':
        let coffee = tokens[1];
        arrayOfCoffee.push(coffee);
        break;
      case 'Remove':
        let numToBeRemoved = tokens[2];
        if (tokens[1] === 'first') {
          arrayOfCoffee.splice(0, numToBeRemoved);
        } else if (tokens[1] === 'last') {
          arrayOfCoffee.splice(-numToBeRemoved, numToBeRemoved);
        }
        break;
      case 'Prefer':
        let coffee1Index = tokens[1];
        let coffee2Index = tokens[2];

        if (arrayOfCoffee.length > coffee1Index && arrayOfCoffee.length > coffee2Index) {
          let temp = arrayOfCoffee[coffee1Index];
          arrayOfCoffee[coffee1Index] = arrayOfCoffee[coffee2Index];
          arrayOfCoffee[coffee2Index] = temp;
        }
        break;
      case 'Reverse':
        arrayOfCoffee.reverse();
        break;
    }
  }
  console.log('Coffees:');
  console.log(arrayOfCoffee.join(' '));
}

CoffeeLovers(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
  "3",
  "Include OrdinaryCoffee",
  "Remove first 1", "Prefer 4 1"])

function schoolLibrary(input) {
  let bookShelf = input.shift().split('&');

  for (let book of input) {
    let tokens = book.split(' | ');

    if (tokens[0] === 'Done') {
      break;
    }

    let command = tokens[0];

    switch (command) {
      case 'Add Book':
        let bookToAdd = tokens[1];
        if (!bookShelf.includes(bookToAdd)) {
          bookShelf.unshift(bookToAdd);
        }
        break;
      case 'Take Book':
        let bookToRemove = tokens[1];
        if (bookShelf.includes(bookToRemove)) {
          bookShelf = bookShelf.filter(bookName => bookName !== bookToRemove);
        }
        break;
      case 'Swap Books':
        let book1 = tokens[1];
        let book2 = tokens[2];

        if (bookShelf.includes(book1) && bookShelf.includes(book2)) {
          let book1Index = bookShelf.indexOf(book1);
          let book2Index = bookShelf.indexOf(book2);
          let temp = bookShelf[book1Index];
          bookShelf[book1Index] = bookShelf[book2Index];
          bookShelf[book2Index] = temp;
        }
        break;
      case 'Insert Book':
        let bookToInsert = tokens[1];
        if (!bookShelf.includes(bookToInsert)) {
          bookShelf.push(bookToInsert);
        }
        break;
      case 'Check Book':
        let bookToCheckIndex = tokens[1];
        if (bookShelf.length > bookToCheckIndex) {
          console.log(bookShelf[bookToCheckIndex]);
        }
        break;
    }
  }
  console.log(bookShelf.join(', '));
}

schoolLibrary([
  "Don Quixote&The Great Gatsby&Moby Dick",
  "Add Book | Ulysses",
  "Take Book | Don Quixote",
  "Insert Book | Alice's Adventures in Wonderland",
  "Done"
])

schoolLibrary([
  "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
  "Add Book | Catch-22",
  "Swap Books | Anna Karenina | Catch-22",
  "Take Book | David Copperfield",
  "Done"])

schoolLibrary([
  "War and Peace&Hamlet&Ulysses&Madame Bovary",
  "Check Book | 2",
  "Swap Books | Don Quixote | Ulysses",
  "Done"
])