function townsToJson(array) {
  const towns = [];

  const regex = new RegExp(/\s*\|\s*/);
  for (const line of array.splice(1)) {
    let tokens = line.split(regex).filter(x => x !== '');
    towns.push({
      Town: tokens[0],
      Latitude: Number(Number(tokens[1]).toFixed(2)),
      Longitude: Number(Number(tokens[2]).toFixed(2))
    });
  }

  return JSON.stringify(towns);
}