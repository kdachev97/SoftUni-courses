function cinemaTickets(input) {
  let i = 0;
  let movie = input[i++];
  let totalTicket = 0;
  let studentCounter = 0;
  let standardCounter = 0;
  let kidsCounter = 0;

  while (movie !== 'Finish') {
    let freeSpace = Number(input[i++]);
    let typeTicket = input[i++];
    let sellsTicket = 0;

    while (typeTicket !== 'End') {
      if (typeTicket === 'student') {
        studentCounter++;
      } else if (typeTicket === 'standard') {
        standardCounter++;
      } else {
        kidsCounter++;
      }
      totalTicket++;
      sellsTicket++;
      if (sellsTicket >= freeSpace) {
        break;
      }
      typeTicket = input[i++];
    }

    console.log(`${movie} - ${((sellsTicket / freeSpace) * 100).toFixed(2)}% full.`);
    movie = input[i++];
  }

  console.log(`Total tickets: ${totalTicket}`);
  console.log(`${((studentCounter / totalTicket) * 100).toFixed(2)}% student tickets.`);
  console.log(`${((standardCounter / totalTicket) * 100).toFixed(2)}% standard tickets.`);
  console.log(`${((kidsCounter / totalTicket) * 100).toFixed(2)}% kids tickets.`);
}