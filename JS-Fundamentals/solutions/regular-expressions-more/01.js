function winningTicket(input) {
  let splitPattern = /[, ]+/g;
  let array = input.split(splitPattern);
  let winningTicketPattern = /\b(?:(?:[^$@#^]*([$@#^]{6,9})[^$@#^]*)\1[^$@#^]*)\b/;
  let jackpotPattern = /([$|@|#|^]{10})\1/;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 20) {
      let jackpotArray = array[i].match(jackpotPattern);
      let winningArray = array[i].match(winningTicketPattern);

      if (jackpotArray) {
        console.log(`ticket "${array[i]}" - ${jackpotArray[1].length}${jackpotArray[1][0]} Jackpot!`);
      } else if (winningArray) {
        console.log(`ticket "${array[i]}" - ${winningArray[1].length}${winningArray[1][0]}`);
      } else {
        console.log(`ticket "${array[i]}" - no match`);
      }

    } else {
      console.log('invalid ticket');
    }
  }
}