function factory(library, orders) {
  const result = [];

  for (let order of orders) {
    // Create empty object and copy properties from template
    const device = Object.assign({}, order.template);

    // Compose methods from library for every item in parts
    for (let part of order.parts) {
      device[part] = library[part];
    }

    // Save result
    result.push(device);
  }
  return result;
}