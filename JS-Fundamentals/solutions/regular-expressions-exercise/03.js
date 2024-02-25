function barIncome(input) {
  let pattern = /%([A-Z][a-z]*)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/;
  let total = 0;

  while (input[0] !== 'end of shift') {

    let line = input.shift();

    let match = pattern.exec(line);

    if (match) {
      let [_, name, product, quantity, price] = match;
      quantity = Number(quantity);
      price = Number(price);
      let totalProduct = quantity * price;
      total += totalProduct;

      console.log(`${name}: ${product} - ${totalProduct.toFixed(2)}`);
    }
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}