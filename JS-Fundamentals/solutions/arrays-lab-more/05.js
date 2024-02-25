function tseamAccount(array) {
  let startingArray = array[0].split(' ');

  for (let i = 1; i < array.length; i++) {
    while (array[i] !== "Play!") {
      let modifiedArray = (array[i].split(' '));
      let command = modifiedArray[0];
      let game = modifiedArray[1];
      if (command === "Install" && !startingArray.includes(game)) {
        startingArray.push(game);
      }
      if (command === "Uninstall" && startingArray.includes(game)) {
        startingArray = startingArray.filter((gameToDelete) => {
          if (gameToDelete !== game) {
            return true;
          } else {
            return false;
          }
        })
      }
      // Alternative for Uninstall
      // if (command === "Uninstall" && startingArray.includes(game)) {
      //   startingArray = startingArray.filter((gameToDelete) => {
      //     return gameToDelete !== game;
      //   });
      // }
      if (command === "Update" && startingArray.includes(game)) {
        startingArray = startingArray.filter((gameToUpdate) => {
          if (gameToUpdate !== game) {
            return true;
          } else {
            return false;
          }
        });
        startingArray.push(game);
      }

      if (command === "Expansion") {
        let expansionGame = game.split('-');
        if (startingArray.includes(expansionGame[0])) {
          const baseGameIndex = startingArray.indexOf(expansionGame[0]);
          startingArray.splice(baseGameIndex + 1, 0, expansionGame.join(':'));
        }
      }
      i++;
    }
  }
  console.log(startingArray.join(' '));
}