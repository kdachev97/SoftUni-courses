function plantDiscovery(input) {
  let actions = {
    'Rate': rate,
    'Update': update,
    'Reset': reset
  };

  let catalog = {};
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split('<->');

    catalog[name] = {
      rarity: Number(rarity),
      ratings: [],
      avgRating: 0
    }
  }

  while (input[0] !== 'Exhibition') {
    let [command, params] = input.shift().split(': ');
    let action = actions[command];
    action(params);
  }

  // let sorted = Object.entries(catalog).sort(comparePlants);

  console.log('Plants for the exhibition:');
  for (let [name, plant] of Object.entries(catalog)) {

    console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`)
  }
  function rate(line) {
    let [name, rating] = line.split(' - ');
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.push(Number(rating));

      let total = 0;
      for (let rating of plant.ratings) {
        total += rating;
      }
      plant.avgRating = total / plant.ratings.length;
    } else {
      console.log('error');
    }
  }

  function update(line) {
    let [name, rarity] = line.split(' - ');
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rarity = Number(rarity);
    } else {
      console.log('error');
    }
  }

  function reset(name) {
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.ratings.length = 0;
      plant.avgRating = 0;
    } else {
      console.log('error');
    }
  }

  // function comparePlants(a, b) {
  //   let rarityA = a[1].rarity;
  //   let rarityB = b[1].rarity;

  //   let ratingA = a[1].avgRating;
  //   let ratingB = b[1].avgRating;

  //   return (rarityB - rarityA) || (ratingB - ratingA);
  // }
}

plantDiscovery([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition"
])

function worldTour(input) {
  let actions = {
    'Add Stop': add,
    'Remove Stop': remove,
    'Switch': swap
  }
  let result = input.shift();

  while (input[0] !== 'Travel') {
    let tokens = input.shift().split(':');
    let command = tokens[0];
    let action = actions[command];
    action(tokens[1], tokens[2]);

    console.log(result);
  }

  console.log(`Ready for world tour! Planned stops: ${result}`);

  function add(index, string) {
    index = Number(index);
    if (validate(index)) {
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = left + string + right;
    }
  }

  function remove(start, end) {
    start = Number(start);
    end = Number(end);
    if (validate(start) && validate(end)) {
      let left = result.substring(0, start);
      let right = result.substring(end + 1);
      result = left + right;
    }
  }

  function swap(oldString, newString) {
    let pattern = new RegExp(oldString, 'g');
    result = result.replace(pattern, newString);
  }

  function validate(index) {
    return (index >= 0) && (index < result.length);
  }
}

worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"])

function destinationMapper(input) {
  let pattern = /([=|\/])([A-Z][A-Za-z]{2,})(\1)/g;
  let result = [];
  let points = 0;

  let match = pattern.exec(input);

  while (match !== null) {
    result.push(match[2]);
    points += match[2].length;

    match = pattern.exec(input);
  }
  console.log(`Destinations: ${result.join(', ')}`);
  console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/ I5valid/=i=")


function travel(input) {
  let pattern = /([=|\/])[A-Z][A-Za-z]{2,}\1/g;
  let locations = []
  let points = 0;

  while ((match = pattern.exec(input)) != null) {
    let wordPattern = /\w+/g;
    let words = wordPattern.exec(match[0])
    locations.push(words[0])
  }

  for (let el of locations) {
    points += el.length
  }

  console.log(`Destinations: ${locations.join(', ')}`)
  console.log(`Travel Points: ${points}`);
}