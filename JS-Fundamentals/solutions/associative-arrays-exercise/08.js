function travelTime(input) {
  let destinations = {};

  for (let element of input) {
    let [country, town, cost] = element.split(' > ');

    if (!destinations.hasOwnProperty(country)) {
      destinations[country] = {};
    }

    if (!Object.keys(destinations[country]).includes(town)) {
      destinations[country][town] = Number(cost);
    }

    if (Number(cost) < destinations[country][town]) {
      destinations[country][town] = Number(cost);
    }
  }

  let sortedCountries = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));

  for (let [country, towns] of sortedCountries) {
    let sortedTowns = Object.entries(towns).sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
    let townsAsEntries = sortedTowns.map(x => `${x[0]} -> ${x[1]}`);
    let resultString = `${country} -> ${townsAsEntries.join(' ')}`;
    console.log(resultString);
  }
}