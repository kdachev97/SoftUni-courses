function minersTask(array) {
  let result = {};

  for (let i = 0; i < array.length - 1; i += 2) {
    let resource = array[i];
    let quantity = Number(array[i + 1]);

    if (result.hasOwnProperty(resource)) {
      result[resource] += quantity;
    } else {
      result[resource] = quantity;
    }
  }

  for (let key in result) {
    console.log(`${key} -> ${result[key]}`);
  }
}