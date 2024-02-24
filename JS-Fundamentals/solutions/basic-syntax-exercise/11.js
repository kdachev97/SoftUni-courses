function bitcoin(gramsGold) {
  let dayOfFirstBtc = 0;
  let day = 0;
  let totalMoney = 0;
  let btcPrice = 11949.16;
  let goldPrice = 67.51;
  let btcBought = 0;
  let moneyLeft = 0;

  for (let i = 0; i < gramsGold.length; i++) {
    day++;
    let gramsDaily = gramsGold[i];

    let goldValue = gramsDaily * goldPrice;

    if (day % 3 !== 0) {
      totalMoney += goldValue;
    } else {
      gramsDaily = 0.7 * gramsDaily;
      goldValue = gramsDaily * goldPrice;
      totalMoney += goldValue;
    }

    while (totalMoney >= btcPrice) {
      totalMoney -= btcPrice;
      btcBought++;
      if (btcBought === 1) {
        dayOfFirstBtc = day;
      }
    }

    moneyLeft = totalMoney;
  }

  console.log(`Bought bitcoins: ${btcBought}`);
  if (dayOfFirstBtc !== 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBtc}`);
  }
  console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}