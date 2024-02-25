function starEnigma(input) {
  let messages = Number(input.shift());

  let attackedPlanets = [];
  let destroyedPlanets = [];
  let patternStar = /[SsTtAaRr]/g;
  let secretPattern = /@(?<planet>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<typeOfAttack>[AD])![^@:!\->]*->(?<soldiers>\d+)/;

  for (let i = 0; i < messages; i++) {
    let line = input[i];

    let key = (line.match(patternStar) || []).length;

    let decrypted = '';
    for (let char of line) {
      let decryptedChar = char.charCodeAt(0) - key;
      decrypted += String.fromCharCode(decryptedChar);
    }

    let result = secretPattern.exec(decrypted);
    if (result !== null) {
      let typeOfAttack = result.groups['typeOfAttack'];
      let planet = result.groups['planet'];

      if (typeOfAttack === 'A') {
        attackedPlanets.push(planet);
      } else if (typeOfAttack === 'D') {
        destroyedPlanets.push(planet);
      }
    }
  }

  attackedPlanets.sort((a, b) => a.localeCompare(b));
  destroyedPlanets.sort((a, b) => a.localeCompare(b));

  console.log(`Attacked planets: ${attackedPlanets.length}`);
  if (attackedPlanets.length > 0) {
    for (let planet of attackedPlanets) {
      console.log(`-> ${planet}`)
    }
  }

  console.log(`Destroyed planets: ${destroyedPlanets.length}`);
  if (destroyedPlanets.length > 0) {
    for (let planet of destroyedPlanets) {
      console.log(`-> ${planet}`);
    }
  }
}