function skiVacation(input) {
  let days = Number(input[0]);
  let roomType = input[1];
  let score = input[2];
  let nights = days - 1;
  let noScoreCost;
  let cost;

  switch (roomType) {
    case 'room for one person':
      if (score == 'positive') {
        cost = 18 * nights + ((18 * nights) * 0.25);
      } else if (score == 'negative') {
        cost = 18 * nights - ((18 * nights) * 0.1);
      }
      break;

    case 'apartment':
      if (nights < 10) {
        if (score == 'positive') {
          noScoreCost = 25 * nights - ((25 * nights) * 0.3);
          cost = noScoreCost + (noScoreCost * 0.25);
        } else if (score == 'negative') {
          noScoreCost = 25 * nights - ((25 * nights) * 0.3);
          cost = noScoreCost - (noScoreCost * 0.1);
        }
      } else if (10 <= nights && nights <= 15) {
        if (score == 'positive') {
          noScoreCost = 25 * nights - ((25 * nights) * 0.35);
          cost = noScoreCost + (noScoreCost * 0.25);
        } else if (score == 'negative') {
          noScoreCost = 25 * nights - ((25 * nights) * 0.35);
          cost = noScoreCost - (noScoreCost * 0.1);
        }
      } else if (nights > 15) {
        if (score == 'positive') {
          noScoreCost = 25 * nights - ((25 * nights) * 0.5);
          cost = noScoreCost + (noScoreCost * 0.25);
        } else if (score == 'negative') {
          noScoreCost = 25 * nights - ((25 * nights) * 0.5);
          cost = noScoreCost - (noScoreCost * 0.1);
        }
      }
      break;

    case 'president apartment':
      if (nights < 10) {
        if (score == 'positive') {
          noScoreCost = 35 * nights - ((35 * nights) * 0.1);
          cost = noScoreCost + (noScoreCost * 0.25);
        } else if (score == 'negative') {
          noScoreCost = 35 * nights - ((35 * nights) * 0.1);
          cost = noScoreCost - (noScoreCost * 0.1);
        }
      } else if (10 <= nights && nights <= 15) {
        if (score == 'positive') {
          noScoreCost = 35 * nights - ((35 * nights) * 0.15);
          cost = noScoreCost + (noScoreCost * 0.25);
        } else if (score == 'negative') {
          noScoreCost = 35 * nights - ((35 * nights) * 0.15);
          cost = noScoreCost - (noScoreCost * 0.1);
        }
      } else if (nights > 15) {
        if (score == 'positive') {
          noScoreCost = 35 * nights - ((35 * nights) * 0.2);
          cost = noScoreCost + (noScoreCost * 0.25);
        } else if (score == 'negative') {
          noScoreCost = 35 * nights - ((35 * nights) * 0.2);
          cost = noScoreCost - (noScoreCost * 0.1);
        }
      }
      break;
  }

  console.log(`${cost.toFixed(2)}`);
}