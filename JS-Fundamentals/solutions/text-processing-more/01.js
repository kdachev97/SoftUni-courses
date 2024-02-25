function valueOfString(array) {
  let text = array[0];
  let casing = array[1];
  let upperCaseArray = [];
  let lowerCaseArray = [];
  let sum = 0;

  for (let letter of text) {
    let char = letter.charCodeAt(0);
    if (letter === letter.toLocaleUpperCase() && char >= 65 && char <= 90) {
      upperCaseArray.push(char);
    } else if (letter === letter.toLocaleLowerCase() && char >= 97 && char <= 122) {
      lowerCaseArray.push(char);
    }
  }

  if (casing === 'UPPERCASE') {
    sum = upperCaseArray.reduce((a, b) => a + b);
  } else if (casing === 'LOWERCASE') {
    sum = lowerCaseArray.reduce((a, b) => a + b);
  }

  console.log(`The total sum is: ${sum}`);
}