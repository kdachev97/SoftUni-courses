function flightSchedule(input) {
  let flights = input[0];
  let changedFlightts = input[1];
  let statusToCheck = input[2].join('');
  let resultArray = [];

  for (let flight of flights) {
    let tokens = flight.split(' ');
    let flightNumber = tokens[0];
    let destination = tokens[2] ? `${tokens[1]} ${tokens[2]}` : tokens[1];

    resultArray.push({ Destination: destination, Status: statusToCheck });

  }

  for (let changedFlight of changedFlightts) {
    let tokens = changedFlight.split(' ');
    let flightNumber = tokens.shift();
    let status = tokens.join(' ');

    let existingFlight = resultArray.find(flight => flight.Destination === resultArray[flightNumber].Destination);

    if (existingFlight) {
      existingFlight.Status = status;
    }
  }
  for (let flight of resultArray) {
    if ((statusToCheck === 'Ready to fly' && flight.Status !== 'Cancelled') ||
      (statusToCheck !== 'Ready to fly' && flight.Status === statusToCheck)) {
      console.log(flight);
    }
  }
}