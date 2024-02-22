function trekkingMania(input) {
  let numberOfGroups = Number(input[0]);
  let totalPeople = 0;

  let v1 = 0;
  let v2 = 0;
  let v3 = 0;
  let v4 = 0;
  let v5 = 0;

  for (let i = 1; i <= numberOfGroups; i++) {
    let numberOfPeople = Number(input[i]);
    totalPeople += numberOfPeople;

    if (numberOfPeople <= 5) {
      v1 += numberOfPeople;
    } else if (numberOfPeople <= 12) {
      v2 += numberOfPeople;
    } else if (numberOfPeople <= 25) {
      v3 += numberOfPeople;
    } else if (numberOfPeople <= 40) {
      v4 += numberOfPeople;
    } else if (numberOfPeople >= 41) {
      v5 += numberOfPeople;
    }
  }

  let p1Percentage = v1 / totalPeople * 100;
  let p2Percentage = v2 / totalPeople * 100;
  let p3Percentage = v3 / totalPeople * 100;
  let p4Percentage = v4 / totalPeople * 100;
  let p5Percentage = v5 / totalPeople * 100;

  console.log(`${p1Percentage.toFixed(2)}%`);
  console.log(`${p2Percentage.toFixed(2)}%`);
  console.log(`${p3Percentage.toFixed(2)}%`);
  console.log(`${p4Percentage.toFixed(2)}%`);
  console.log(`${p5Percentage.toFixed(2)}%`);
}