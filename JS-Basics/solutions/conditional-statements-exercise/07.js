function shopping(input) {
  let budget = Number(input[0]);
  let videoCard = Number(input[1]);
  let processor = Number(input[2]);
  let memory = Number(input[3]);

  let costVideoCard = videoCard * 250;
  let costProcessor = processor * (0.35 * costVideoCard);
  let costMemory = memory * (0.1 * costVideoCard);
  let totalCost = costVideoCard + costProcessor + costMemory;

  if (videoCard > processor) {
    totalCost = totalCost - (0.15 * totalCost);
  }

  if (budget >= totalCost) {
    console.log(`You have ${(budget - totalCost).toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${(totalCost - budget).toFixed(2)} leva more!`)
  }
}