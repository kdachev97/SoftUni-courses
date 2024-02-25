function ladybugs(array) {
  let fieldSize = array[0];
  let initialField = [];

  // Create the initial field with ladybug positions
  for (let i = 0; i < fieldSize; i++) {
    initialField.push(0);
  }

  let ladybugIndexes = array[1].split(' ');
  for (let ladybugIndex = 0; ladybugIndex < ladybugIndexes.length; ladybugIndex++) {
    let initialIndex = Number(ladybugIndexes[ladybugIndex]);
    if (initialIndex >= 0 && initialIndex < fieldSize) {
      initialField[initialIndex] = 1;
    }
  }

  for (let j = 2; j < array.length; j++) {
    let command = array[j].split(' ');
    let startingIndex = Number(command[0]);
    let direction = command[1];
    let distance = Number(command[2]);

    if (initialField[startingIndex] === 0 || startingIndex < 0 || startingIndex >= fieldSize) {
      continue; // Skip invalid commands
    }

    initialField[startingIndex] = 0; // Remove ladybug from the initial position

    let newPosition = startingIndex;

    while (true) {
      if (direction === 'right') {
        newPosition += distance;
      } else {
        newPosition -= distance;
      }

      if (newPosition < 0 || newPosition >= fieldSize) {
        break; // Ladybug flies out of the field
      }

      if (initialField[newPosition] === 0) {
        initialField[newPosition] = 1; // Place the ladybug in the new position
        break;
      }
    }
  }

  // Print the final state of the field
  console.log(initialField.join(' '));
}