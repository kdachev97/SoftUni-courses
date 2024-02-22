function cake2(input) {
  let width = Number(input[0]);
  let length = Number(input[1]);
  let pieces = width * length;
  let totalPiecesTaken = 0;

  let i = 2;

  while (i < input.length) {

    let piecesPerPerson = input[i];

    if (piecesPerPerson === "STOP") {
      break;
    } else {
      piecesPerPerson = Number(piecesPerPerson);
      if (!isNaN(piecesPerPerson)) {
        totalPiecesTaken += piecesPerPerson;
      }
    }
    i++;
  }

  if (pieces >= totalPiecesTaken) {
    console.log(`${pieces - totalPiecesTaken} pieces are left.`);
  } else {
    console.log(`No more cake left! You need ${totalPiecesTaken - pieces} pieces more.`);
  }
}