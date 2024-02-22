function fishingBoat(input) {
  let groupBudget = Number(input[0]);
  let season = input[1];
  let fishers = input[2];
  let rent;
  let basePrice;

  switch (season) {
    case 'Spring':
      basePrice = 3000;
      break;
    case 'Summer':
    case 'Autumn':
      basePrice = 4200;
      break;
    case 'Winter':
      basePrice = 2600;
      break;
    default:
      return;
  }

  if (fishers <= 6) {
    rent = 0.9 * basePrice;
  } else if (fishers <= 11) {
    rent = 0.85 * basePrice;
  } else {
    rent = 0.75 * basePrice;
  }

  if (fishers % 2 === 0 && season !== 'Autumn') {
    rent *= 0.95;
  }

  let moneyLeft = groupBudget - rent;

  if (moneyLeft >= 0) {
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    console.log(`Not enough money! You need ${(Math.abs(moneyLeft)).toFixed(2)} leva.`)
  }
}