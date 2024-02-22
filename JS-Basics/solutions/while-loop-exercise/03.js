function vacation(input) {
  let moneyNeeded = Number(input[0]);
  let money = Number(input[1]);
  let i = 2;
  let consecutiveSpends = 0;
  let days = 0;

  while (money < moneyNeeded) {
    let spendOrSave = input[i];
    let amount = Number(input[i + 1]);

    days++;

    if (spendOrSave === 'spend') {
      consecutiveSpends++;
      money = money - amount;
      if (money < 0) {
        money = 0;
      }
    } else if (spendOrSave === 'save') {
      consecutiveSpends = 0;
      money = money + amount;
    }

    if (consecutiveSpends === 5) {
      console.log(`
      You can't save the money.
      ${days}
      `);
      break;
    }

    i += 2;
  }
  if (money >= moneyNeeded) {
    console.log(`You saved the money for ${days} days.`);
  }
}