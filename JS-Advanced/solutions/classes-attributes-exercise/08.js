function juiceFlavors(juicesArray) {
  let juicesAmount = new Map();
  let juicesBottles = new Map();

  for (let i = 0; i < juicesArray.length; i++) {
    let [juiceName, amount] = juicesArray[i].split(' => ');
    amount = Number(amount);

    if (!juicesAmount.has(juiceName)) {
      juicesAmount.set(juiceName, 0);
    }

    let totalAmount = juicesAmount.get(juiceName) + amount;

    if (totalAmount >= 1000) {
      if (!juicesBottles.has(juiceName)) {
        juicesBottles.set(juiceName, 0);
      }

      let newBottles = Math.trunc(totalAmount / 1000);
      let totalBottles = juicesBottles.get(juiceName) + newBottles;
      juicesBottles.set(juiceName, totalBottles);
    }

    juicesAmount.set(juiceName, totalAmount % 1000);
  }

  juicesBottles.forEach((value, key) => console.log(`${key} => ${value}`));
}

juiceFlavors(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549'])