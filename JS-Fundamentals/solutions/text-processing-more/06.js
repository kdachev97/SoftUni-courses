function treasureFinder(array) {
  let key = array.shift().split(' ').join('');
  let keyMatched = '';
  let maxLineLength = 0;

  for (let line of array) {
    if (line === 'find') {
      break;
    }

    if (maxLineLength < line.length) {
      maxLineLength = line.length;
    }

    keyMatched = key.repeat(Math.ceil(maxLineLength / key.length));

    let numberKey = keyMatched.split('').map(Number);
    let result = [];

    for (let i = 0; i < line.length; i++) {
      let char = line[i].charCodeAt(0);
      let asciiChar = char - numberKey[i];
      let charToPush = String.fromCharCode(asciiChar);
      result.push(charToPush);
    }

    let decryptedLine = result.join('');
    let type = decryptedLine.substring(decryptedLine.indexOf('&') + 1, decryptedLine.lastIndexOf('&'));
    let coordinates = decryptedLine.substring(decryptedLine.indexOf('<') + 1, decryptedLine.indexOf('>'));

    console.log(`Found ${type} at ${coordinates}`);
  }
}