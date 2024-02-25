function netherRealms(input) {
  let splitPattern = /[, ]+/g;
  let array = input.split(splitPattern);
  let healthPattern = /([^0-9.+\-*\/])/g;
  let damagePattern = /(-?\d+(?:\.\d+)?)/g;
  let operationsPattern = /(\/|\*)/g;
  let demons = [];

  for (let i = 0; i < array.length; i++) {
    let demon = {};

    let demonName = array[i];
    let healthArray = array[i].match(healthPattern);
    let damageArray = array[i].match(damagePattern) || [0];
    let operationsArray = array[i].match(operationsPattern);

    let health = 0;
    let damage = 0;

    for (let letter of healthArray) {
      let asciiValue = letter.charCodeAt(0);
      health += asciiValue;
    }

    for (let number of damageArray) {
      damage += Number(number);
    }

    for (let operation of operationsArray || []) {
      if (operation === '*') {
        damage *= 2;
      } else if (operation === '/') {
        damage /= 2;
      }
    }

    demon[demonName] = { health: health, damage: damage };
    demons.push(demon);
  }

  demons.sort((a, b) => Object.keys(a)[0].localeCompare(Object.keys(b)[0]));

  for (let demon of demons) {
    let demonName = Object.keys(demon)[0];
    let health = demon[demonName].health;
    let damage = demon[demonName].damage;

    console.log(`${demonName} - ${health} health, ${damage.toFixed(2)} damage`);
  }

}