function spiceMustFlow(startingYield) {
  let exstractedYield = startingYield;
  let days = 0;
  let total = 0;

  while (exstractedYield >= 100) {
    days++;
    total += exstractedYield - 26;
    exstractedYield -= 10;
  }

  if (exstractedYield > 26 && days > 0) {
    total -= 26;
  }

  console.log(days);
  console.log(total);
}