function checkBudget(input) {
  let filmBudget = Number(input[0]);
  let extras = Number(input[1]);
  let clothingCostOne = Number(input[2]);
  let decor = 0.1 * filmBudget;
  let clothingCosts = clothingCostOne * extras;
  let totalCost = clothingCosts + decor;
  if (extras > 150) {
    clothingCosts = clothingCosts - (clothingCosts * 0.1);
    totalCost = clothingCosts + decor;
  }
  if (totalCost > filmBudget) {
    console.log(`Not enough money!
    Wingard needs ${(totalCost - filmBudget).toFixed(2)} leva more.`)
  } else {
    console.log(`Action!
    Wingard starts filming with ${(filmBudget - totalCost).toFixed(2)} leva left.`)
  }
}