function dungeonestDark(array) {
  let newArray = array[0].split('|');
  let health = 100;
  let coins = 0;
  let coinsTotal = 0;
  let roomCount = 0;
  for (let i = 0; i < newArray.length; i++) {
    let currentRoom = newArray[i].split(' ')
    let command = currentRoom[0];
    let num = Number(currentRoom[1]);
    roomCount++;

    if (command === 'potion') {
      if (health + num > 100) {
        num = 100 - health;
        health = 100;
      } else {
        health += num;
      }
      console.log(`You healed for ${num} hp.`);
      console.log(`Current health: ${health} hp.`);


    } else if (command === 'chest') {
      coins = Number(num);
      coinsTotal += Number(num);
      console.log(`You found ${coins} coins.`);

    } else {
      health -= Number(num);
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${roomCount}`);
        return;
      }
    }
  }
  console.log(`You've made it!`);
  console.log(`Coins: ${coinsTotal}`);
  console.log(`Health: ${health}`);
}