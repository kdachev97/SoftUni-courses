function time(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);
  let addMinutes = 15;
  minutes = minutes + addMinutes;

  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes = minutes % 60;
    if (hours >= 24) {
      hours = hours % 24;
    }
    if (minutes < 10) {
      console.log(`${hours}:0${minutes}`)
    } else {
      console.log(`${hours}:${minutes}`)
    }
  } else {
    console.log(`${hours}:${minutes}`)
  }
}