function steps(input) {
  let i = 0;
  let totalSteps = 0;

  while (i < input.length) {
    let dailySteps = Number(input[i]);

    if (isNaN(dailySteps)) {
      i++;
      continue;
    }

    totalSteps += dailySteps;
    i++;
  }

  if (totalSteps < 10000) {
    console.log(`${10000 - totalSteps} more steps to reach goal.`);
  } else {
    console.log(`Goal reached! Good job!
    ${totalSteps - 10000} steps over the goal!`);
  }
}