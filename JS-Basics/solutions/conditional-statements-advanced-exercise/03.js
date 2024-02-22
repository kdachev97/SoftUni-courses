function newHome(input) {
  let flowers = input[0];
  let numberOfFlowers = Number(input[1]);
  let budget = Number(input[2]);
  let priceRoses = 5 * numberOfFlowers;
  let priceDahlias = 3.80 * numberOfFlowers;
  let priceTulips = 2.80 * numberOfFlowers;
  let priceNarcissus = 3 * numberOfFlowers;
  let priceGladiolus = 2.50 * numberOfFlowers;
  let leftBudget;

  switch (flowers) {
    case 'Roses':
      if (numberOfFlowers > 80) {
        leftBudget = budget - (priceRoses - (priceRoses * 0.1));
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget).toFixed(2))} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`)
        }
      } else {
        leftBudget = budget - priceRoses;
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget).toFixed(2))} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`);
        }
      }
      break;
    case 'Dahlias':
      if (numberOfFlowers > 90) {
        leftBudget = budget - (priceDahlias - (priceDahlias * 0.15));
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget).toFixed(2))} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`)
        }
      } else {
        leftBudget = budget - priceDahlias;
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget)).toFixed(2)} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`);
        }
      }
      break;
    case 'Tulips':
      if (numberOfFlowers > 80) {
        leftBudget = budget - (priceTulips - (priceTulips * 0.15));
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget).toFixed(2))} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`)
        }
      } else {
        leftBudget = budget - priceTulips;
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget)).toFixed(2)} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`);
        }
      }
      break;
    case 'Narcissus':
      if (numberOfFlowers < 120) {
        leftBudget = budget - (priceNarcissus + (priceNarcissus * 0.15));
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget).toFixed(2))} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`)
        }
      } else {
        leftBudget = budget - priceNarcissus;
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget)).toFixed(2)} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`);
        }
      }
      break;
    case 'Gladiolus':
      if (numberOfFlowers < 80) {
        leftBudget = budget - (priceGladiolus + (priceGladiolus * 0.2));
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget).toFixed(2))} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`)
        }
      } else {
        leftBudget = budget - priceGladiolus;
        if (leftBudget >= 0) {
          console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(Math.abs(leftBudget)).toFixed(2)} leva left.`);
        } else {
          console.log(`Not enough money, you need ${(Math.abs(leftBudget).toFixed(2))} leva more.`);
        }
      }
      break;
    default:
      console.log('error');
  }
}