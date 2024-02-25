function catalogue(input) {
  let catalog = {};

  for (let product of input) {
    let tokens = product.split(' : ');
    let productName = tokens[0];
    let price = Number(tokens[1]);
    let initial = productName[0];

    if (catalog.hasOwnProperty(initial) === false) {
      catalog[initial] = {};
    }

    catalog[initial][productName] = price;
  }

  let sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

  for (let key of sortedKeys) {
    console.log(key);
    let sortedProducts = Object.keys(catalog[key])
      .sort((a, b) => a.localeCompare(b));

    for (let keyP of sortedProducts) {
      console.log(`  ${keyP}: ${catalog[key][keyP]}`);
    }
  }
}