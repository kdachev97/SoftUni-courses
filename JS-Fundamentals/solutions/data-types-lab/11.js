function tripleLetters(number) {
  let asNumber = Number(number);
  for (let i = 0; i < asNumber; i++) {
    for (let j = 0; j < asNumber; j++) {
      for (let k = 0; k < asNumber; k++) {
        let letter1 = String.fromCharCode(97 + i);
        let letter2 = String.fromCharCode(97 + j);
        let letter3 = String.fromCharCode(97 + k);
        console.log(`${letter1}${letter2}${letter3}`)
      }
    }
  }
}