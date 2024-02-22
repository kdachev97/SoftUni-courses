function oscars(input) {
  let actorName = input[0];
  let points = Number(input[1]);
  let numberOfJudges = Number(input[2]);
  let totalPoints = points;

  for (let i = 3; i < 3 + 2 * numberOfJudges; i += 2) {
    let judgeName = input[i];
    let judgePoints = Number(input[i + 1]);

    totalPoints = totalPoints + (judgeName.length * judgePoints) / 2

    if (totalPoints > 1250.5) {
      return console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
    }
  }
  console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`);
}