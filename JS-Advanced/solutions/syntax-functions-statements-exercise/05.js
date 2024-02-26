function timeToWalk(steps, length, speed) {
  let metersPerSecond = speed * (5 / 18);
  let distance = steps * length;
  let breaks = Math.floor(distance / 500);
  let time = distance / metersPerSecond;

  let timeMin = Math.floor(time / 60);
  let timeSec = Math.round(time - (timeMin * 60));
  let timeHr = Math.floor(time / 3600);

  console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin < 10 ? "0" : "") + (timeMin + breaks) + ":" + (timeSec < 10 ? "0" : "") + timeSec);

}