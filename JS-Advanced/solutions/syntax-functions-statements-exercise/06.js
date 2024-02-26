function roadRadar(speed, area) {
  let motorwaySpeed = 130;
  let interstateSpeed = 90;
  let citySpeed = 50;
  let residentialSpeed = 20;
  let difference = 0;
  let speedZone = 0;
  let status = '';

  switch (area) {
    case 'motorway':
      speedZone = motorwaySpeed;
      break;
    case 'interstate':
      if (speed > interstateSpeed) {
        difference = speed - interstateSpeed;
      }
      speedZone = interstateSpeed;
      break;
    case 'city':
      speedZone = citySpeed;
      break;
    case 'residential':
      speedZone = residentialSpeed;
      break;
  }

  if (speed > speedZone) {
    difference = speed - speedZone;
  }

  if (difference !== 0) {
    if (difference <= 20) {
      status = 'speeding';
    } else if (difference <= 40) {
      status = 'excessive speeding';
    } else {
      status = 'reckless driving';
    }

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedZone} - ${status}`);
  } else {
    console.log(`Driving ${speed} km/h in a ${speedZone} zone`);
  }
}