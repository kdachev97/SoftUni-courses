function heroicInventory(array) {
  let heroesArray = [];
  for (let i = 0; i < array.length; i++) {
    let [name, level, items] = array[i].split(' / ');
    level = Number(level);
    items = items !== undefined ? items.split(', ') : [];

    heroesArray.push({ name, level, items });
  }

  return JSON.stringify(heroesArray);
}