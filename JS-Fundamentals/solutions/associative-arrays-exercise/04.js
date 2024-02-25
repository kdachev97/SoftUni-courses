function storage(array) {
  let map = new Map();

  for (let string of array) {
    let tokens = string.split(' ');
    let product = tokens[0];
    let quantity = Number(tokens[1]);

    if (!map.has(product)) {
      map.set(product, +quantity);
    } else {
      let curQuantity = map.get(product);
      let newQuantity = curQuantity += quantity;
      map.set(product, newQuantity);
    }
  }

  for (let kvp of map) {
    console.log(`${kvp[0]} -> ${kvp[1]}`);
  }
}