function lunchBreak(input) {
  let showName = input[0];
  let showDuration = Number(input[1]);
  let breakDuration = Number(input[2]);
  let lunchDuration = 0.125 * breakDuration;
  let relaxDuration = 0.25 * breakDuration;
  let timeForShow = breakDuration - (lunchDuration + relaxDuration);

  if (timeForShow >= showDuration) {
    console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(timeForShow - showDuration)} minutes free time.`)
  } else {
    console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(showDuration - timeForShow)} more minutes.`)
  }
}