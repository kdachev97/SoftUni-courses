function flightSchedule(input) {
  let flights = input[0];
  let newFlightsStatus = input[1];
  let flightStatus = input[2].join(' ');
  let newFlights = {};

  for (let flight of flights) {
    let flightStatus = 'Ready to fly';
    let tokens = flight.split(' ');
    let sector = tokens[0];
    let destination = tokens[2] ? `${tokens[1]} ${tokens[2]}` : tokens[1];
    newFlights[sector] = {
      Destination: destination,
      Status: flightStatus
    };
  }

  for (let newFlight of newFlightsStatus) {
    let [sector, status] = newFlight.split(' ');
    if (newFlights.hasOwnProperty(sector)) {
      newFlights[sector].Status = status;
    }
  }

  for (let flight in newFlights) {
    if (newFlights[flight].Status === flightStatus) {
      console.log(newFlights[flight]);
    }
  }
}