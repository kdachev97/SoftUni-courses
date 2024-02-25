function inventory(heroesList) {
  let heroes = [];

  for (let heroString of heroesList) {
    let tokens = heroString.split(' / ');

    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(', ');

    let heroData = {
      name,
      level,
      items
    };

    heroes.push(heroData);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items.join(', ')}`);
  }
}