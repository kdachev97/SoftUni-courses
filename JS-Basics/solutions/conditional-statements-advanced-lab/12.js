function commission(input) {
  let city = input[0];
  let salesVolume = Number(input[1]);

  if (salesVolume < 0) {
    console.log('error');
    return;
  }

  switch (city) {
    case 'Sofia':
      if (salesVolume <= 500) {
        console.log((salesVolume * 0.05).toFixed(2));
      } else if (salesVolume > 500 && salesVolume <= 1000) {
        console.log((salesVolume * 0.07).toFixed(2));
      } else if (salesVolume > 1000 && salesVolume <= 10000) {
        console.log((salesVolume * 0.08).toFixed(2));
      } else {
        console.log((salesVolume * 0.12).toFixed(2));
      }
      break;
    case 'Varna':
      if (salesVolume <= 500) {
        console.log((salesVolume * 0.045).toFixed(2));
      } else if (salesVolume > 500 && salesVolume <= 1000) {
        console.log((salesVolume * 0.075).toFixed(2));
      } else if (salesVolume > 1000 && salesVolume <= 10000) {
        console.log((salesVolume * 0.1).toFixed(2));
      } else {
        console.log((salesVolume * 0.13).toFixed(2));
      }
      break;
    case 'Plovdiv':
      if (salesVolume <= 500) {
        console.log((salesVolume * 0.055).toFixed(2));
      } else if (salesVolume > 500 && salesVolume <= 1000) {
        console.log((salesVolume * 0.08).toFixed(2));
      } else if (salesVolume > 1000 && salesVolume <= 10000) {
        console.log((salesVolume * 0.12).toFixed(2));
      } else {
        console.log((salesVolume * 0.145).toFixed(2));
      }
      break;
    default:
      console.log('error');
  }
}