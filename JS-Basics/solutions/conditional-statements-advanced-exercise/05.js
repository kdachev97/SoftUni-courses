function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let newBudget;
  let place = ['Camp', 'Hotel'];
  let destination = ['Bulgaria', 'Balkans', 'Europe'];

  if (budget <= 100) {
    if (season === 'summer') {
      newBudget = 0.3 * budget;
      place = place[0];
      destination = destination[0];
    } else if (season === 'winter') {
      newBudget = 0.7 * budget;
      place = place[1];
      destination = destination[0]
    }
  } else if (budget > 100 && budget <= 1000) {
    if (season === 'summer') {
      newBudget = 0.4 * budget;
      place = place[0];
      destination = destination[1];
    } else if (season === 'winter') {
      newBudget = 0.8 * budget;
      place = place[1];
      destination = destination[1];
    }
  } else {
    newBudget = 0.9 * budget;
    place = place[1];
    destination = destination[2];
  }

  console.log(`
  Somewhere in ${destination}
  ${place} - ${(newBudget).toFixed(2)}
  `);
}