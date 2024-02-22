function onTime(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arrivalHour = Number(input[2]);
  let arrivalMinute = Number(input[3]);

  let examTimeMinutes = examHour * 60 + examMinute;
  let arrivalTimeMinutes = arrivalHour * 60 + arrivalMinute;
  let differenceLate = arrivalTimeMinutes - examTimeMinutes;
  let differenceEarly = examTimeMinutes - arrivalTimeMinutes;
  let hour;
  let minutes;

  if (arrivalTimeMinutes > examTimeMinutes) {
    if (differenceLate >= 60) {
      hour = Math.floor(differenceLate / 60);
      minutes = differenceLate % 60;
      if (minutes < 10) {
        console.log(`
      Late 
      ${hour} : 0${minutes} hours after the start`);
      } else {
        console.log(`
      Late 
      ${hour} : ${minutes} hours after the start`);
      }
    } else {
      minutes = differenceLate;
      console.log(`
      Late 
      ${minutes} minutes after the start`);
    }
  } else if (arrivalTimeMinutes < examTimeMinutes) {
    if (differenceEarly > 30 && differenceEarly >= 60) {
      hour = Math.floor(differenceEarly / 60);
      minutes = differenceEarly % 60;
      if (minutes < 10) {
        console.log(`
      Early 
      ${hour} : 0${minutes} hours before the start`);
      } else {
        console.log(`
      Early 
      ${hour} : ${minutes} hours before the start`);
      }
    } else if (differenceEarly > 30 && differenceEarly < 60) {
      minutes = differenceEarly;
      console.log(`
      Early 
      ${minutes} minutes before the start`);
    } else if (differenceEarly <= 30) {
      minutes = differenceEarly;
      console.log(` On time ${minutes} minutes before the start`);
    }
  } else if (arrivalTimeMinutes === examTimeMinutes) {
    console.log(`On time`)
  }
}