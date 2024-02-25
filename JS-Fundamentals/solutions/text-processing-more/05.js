function treasureFinder(array) {
  let key = array.shift().split(' ').join('');
  let keyMatched = 0;
  let maxLineLength = 0;


  for (let line of array) {
    if (line === 'find') {
      break;
    }

    if (maxLineLength < line.length) {
      maxLineLength = line.length;
    }

    keyMatched = key.repeat(maxLineLength / key.length);

    let numberKey = keyMatched.split('').map(Number);

    let result = [];


    for (let i = 0; i < line.length; i++) {
      let char = line[i].charCodeAt(0);
      let asciiChar = char - numberKey[i];
      let charToPush = String.fromCharCode(asciiChar);
      result.push(charToPush);
    }
    console.log(result);
  }
}