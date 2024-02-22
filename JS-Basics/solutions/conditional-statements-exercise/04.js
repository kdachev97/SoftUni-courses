function toyShop(input) {
  let costOfVacation = Number(input[0]);
  let puzzles = Number(input[1]);
  let dolls = Number(input[2]);
  let teddies = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let numberOfToys = puzzles + dolls + teddies + minions + trucks;
  let costOfToys = 2.60 * puzzles + 3 * dolls + 4.10 * teddies + 8.20 * minions + 2 * trucks;
  
  if (numberOfToys >= 50) {
    costOfToys = costOfToys - 0.25 * costOfToys;
  }
  
  let profitAfterRent = costOfToys - 0.1 * costOfToys;

  if (profitAfterRent >= costOfVacation) {
    console.log(`Yes! ${(profitAfterRent - costOfVacation).toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${(costOfVacation - profitAfterRent).toFixed(2)} lv needed.`);
  }
}