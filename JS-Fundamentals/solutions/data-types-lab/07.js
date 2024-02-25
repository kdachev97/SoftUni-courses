function fuelMoney(distance, people, price) {
  let neededFuel = (distance / 100) * 7;
  neededFuel += people * 0.100;
  let money = neededFuel * price;
  console.log(`Needed money for that trip is ${money} lv`);
}