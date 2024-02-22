function tennisRanklist(input) {
  let tournamnents = Number(input[0]);
  let startingPoints = Number(input[1]);
  let totalPoints = startingPoints;
  let tournamentsWon = 0;

  for (let i = 2; i < 2 + tournamnents; i++) {
    let stage = input[i];

    if (stage === 'W') {
      totalPoints = totalPoints + 2000;
      tournamentsWon++;
    } else if (stage === 'F') {
      totalPoints = totalPoints + 1200;
    } else if (stage === 'SF') {
      totalPoints = totalPoints + 720;
    }
  }

  console.log(`Final points: ${totalPoints}`);
  console.log(`Average points: ${Math.floor((totalPoints - startingPoints) / tournamnents)}`);
  console.log(`${((tournamentsWon / tournamnents) * 100).toFixed(2)}%`)
}