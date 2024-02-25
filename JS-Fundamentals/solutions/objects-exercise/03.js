function storeProvision(currentStock, newStock) {
  let store = [];
  for (let i = 0; i < currentStock.length - 1; i += 2) {
    let productName = currentStock[i];
    let quantity = Number(currentStock[i + 1]);

    let productObject = {
      productName,
      quantity
    };

    store.push(productObject);
  }

  for (let i = 0; i < newStock.length - 1; i += 2) {
    let productName = newStock[i];
    let quantity = Number(newStock[i + 1]);

    let productObject = {
      productName,
      quantity
    };

    let indexOfProduct = store.findIndex(x => x.productName === productName);

    if (indexOfProduct === -1) {
      store.push(productObject);
    } else {
      store[indexOfProduct].quantity += quantity;
    }
  }

  for (let product of store) {
    console.log(`${product.productName} -> ${product.quantity}`)
  }
}