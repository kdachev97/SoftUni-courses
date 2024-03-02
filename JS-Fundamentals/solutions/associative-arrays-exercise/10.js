function legendaryFarming(string) {
  let elements = string.split(' ');

  let items = {
    shards: 0,
    fragments: 0,
    motes: 0
  };
  let junk = {};

  let itemsArray = ['shards', 'fragments', 'motes'];

  for (let i = 0; i < elements.length - 1; i += 2) {
    let quantity = elements[i];
    let material = (elements[i + 1]).toLowerCase();

    if (itemsArray.includes(material)) {
      if (items[material] === 0) {
        items[material] = Number(quantity);
      } else {
        items[material] += Number(quantity);
      }
    } else {
      if (!junk.hasOwnProperty(material)) {
        junk[material] = Number(quantity);
      } else {
        junk[material] += Number(quantity);
      }
    }

    if (items[material] >= 250) {
      items[material] -= 250;

      if (material === 'shards') {
        console.log('Shadowmourne obtained!');
        break;
      } else if (material === 'fragments') {
        console.log('Valanyr obtained!');
        break;
      } else if (material === 'motes') {
        console.log(' Dragonwrath obtained!');
        break;
      }
    }
  }
  let sortedItems = Object.keys(items)
    .sort((a, b) => items[b] - items[a] || a.localeCompare(b))
    .map(key => `${key}: ${items[key]}`);
  console.log(sortedItems.join('\n'));

  let sortedJunk = Object.keys(junk)
    .sort((a, b) => a.localeCompare(b))
    .map(key => `${key}: ${junk[key]}`);
  console.log(sortedJunk.join('\n'));
}