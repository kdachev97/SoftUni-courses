function fruit(fruit, weight, money) {
  const weightInKilos = weight / 1000;
  const moneyNeeded = weightInKilos * money;
  console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`);
}