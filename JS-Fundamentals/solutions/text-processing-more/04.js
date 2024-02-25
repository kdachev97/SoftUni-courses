function asciiSumator(array) {
  let firstChar = array[0].charCodeAt(0);
  let secondChar = array[1].charCodeAt(0);
  let stringToCheck = array[2];
  let resultArray = [];
  let result = 0;

  for (let char of stringToCheck) {
    let charAscii = char.charCodeAt(0);
    if (charAscii > firstChar && charAscii < secondChar || charAscii > secondChar && charAscii < firstChar) {
      resultArray.push(charAscii);
      result = resultArray.reduce((a, b) => a + b);
    }
  }
  console.log(result)
}