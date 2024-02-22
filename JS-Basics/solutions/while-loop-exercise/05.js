function coins(input) {
  let change = Number(input[0]);
  let coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
  let coinCount = 0;
  let i = 0;

  while (i < coins.length) {
    if (coins[i] <= change) {
      change -= coins[i];
      change = change.toFixed(2);
      coinCount++;
      i = 0;
    } else {
      i++;
    }
  }
  console.log(coinCount);
}