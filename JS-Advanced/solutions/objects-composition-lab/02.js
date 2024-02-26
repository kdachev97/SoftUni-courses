function townPopulation(townsAsStrings) {
  const towns = {};

  for (let data of townsAsStrings) {
    let [name, population] = data.split(' <-> ');
    population = Number(population);

    if (towns[name]) {
      population += towns[name];
    }
    towns[name] = population;
  }

  for (const [name, population] of Object.entries(towns)) {
    console.log(`${name} : ${population}`);
  }
}