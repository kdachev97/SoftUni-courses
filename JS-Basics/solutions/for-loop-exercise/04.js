function cleverLily(input) {
  let ageLily = Number(input[0]);
  let costWashingMachine = Number(input[1]);
  let costOneToy = Number(input[2]);
  let moneyGained = 0;
  let moneyTaken = 0;
  let toysSold = 0;
  let moneyGainedTotal = 0;

  for (let i = 1; i <= ageLily; i++) {
    if (i % 2 === 0) {
      moneyGained += 10 * (i / 2);
      moneyTaken += 1;
    }
  }

  toysSold = Math.ceil(ageLily / 2);
  moneyGainedTotal = (moneyGained + costOneToy * toysSold) - moneyTaken;

  if (moneyGainedTotal >= costWashingMachine) {
    console.log(`Yes! ${(moneyGainedTotal - costWashingMachine).toFixed(2)}`)
  } else {
    console.log(`No! ${(costWashingMachine - moneyGainedTotal).toFixed(2)}`)
  }
}