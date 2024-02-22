function traveling(input) {
  let i = 0;

  while (i < input.length) {
    const destination = input[i++];
    const budgetNeeded = Number(input[i++]);
    let totalSave = 0;

    while (!isNaN(input[i])) {
      totalSave += Number(input[i++]);
    }

    if (totalSave >= budgetNeeded) {
      console.log(`Going to ${destination}!`);
    }
    if (input[i] === "End") {
      break;
    }
  }
}