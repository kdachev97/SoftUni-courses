function theImitationGame(input) {
  let result = input.shift();

  while (input[0] !== 'Decode') {
    let tokens = input.shift().split('|');
    let command = tokens[0];

    if (command === 'Move') {
      let index = Number(tokens[1]);
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = right + left;
    } else if (command === 'Insert') {
      let index = Number(tokens[1]);
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = left + tokens[2] + right;
    } else if (command === 'ChangeAll') {
      result = result.split(tokens[1]).join(tokens[2]);
    }
  }

  console.log(`The decrypted message is: ${result}`);
}

theImitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode',
])

function adAstra(text) {
  let pattern = /(#|\|)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

  let total = 0;
  let result = [];

  let match = pattern.exec(text);

  while (match !== null) {
    let name = match[2];
    let date = match[3];
    let calories = Number(match[4]);

    total += calories;
    result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);

    match = pattern.exec(text);
  }

  let days = Math.floor(total / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  for (let line of result) {
    console.log(line);
  }
}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
])

function pirates(input) {

  let cities = {};
  let citiesArray = [];

  while (input[0] !== "Sail") {

    let command = input.shift().split('||');//[Tortuga,345000,1250]
    let city = command[0];//Tortuga
    let population = Number(command[1]);//345000
    let gold = Number(command[2]);//1250

    let result = citiesArray.find(e => e.city === city);
    let index = citiesArray.indexOf(result);

    if (result) {
      citiesArray[index].population += population;
      citiesArray[index].gold += gold;
    } else {
      cities = { city, population, gold };
      citiesArray.push(cities);

    }
  }

  while (input[0] !== 'End') {

    let commands = input.shift().split('=>');//Plunder=>Tortuga=>75000=>380
    let currentCommand = commands.shift();

    switch (currentCommand) {
      case 'Plunder':
        let cityName = commands[0];
        let people = Number(commands[1]);
        let gold = Number(commands[2]);

        console.log(`${cityName} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        let result = citiesArray.find(e => e.city === cityName);
        let index = citiesArray.indexOf(result);

        citiesArray[index].population -= people;
        citiesArray[index].gold -= gold;

        if (citiesArray[index].population <= 0 || citiesArray[index].gold <= 0) {
          citiesArray.splice(index, 1);
          console.log(`${cityName} has been wiped off the map!`);
        }
        break;

      case 'Prosper':
        let town = commands[0];
        let treasure = Number(commands[1]);

        if (treasure < 0) {
          console.log("Gold added cannot be a negative number!");
        } else {
          let result = citiesArray.find(e => e.city === town);
          let index = citiesArray.indexOf(result);

          citiesArray[index].gold += treasure;
          console.log(`${treasure} gold added to the city treasury. ${town} now has ${citiesArray[index].gold} gold.`);
        }
        break;
    }
  }

  if (citiesArray.length === 0) {

    console.log("Ahoy, Captain! All targets have been plundered and destroyed!");

  } else {

    console.log(`Ahoy, Captain! There are ${citiesArray.length} wealthy settlements to go to:`);

    citiesArray.forEach(t => console.log(`${t.city} -> Population: ${t.population} citizens, Gold: ${t.gold} kg`));
  }


}
examPrep(["Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End"]);