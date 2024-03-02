function oddOccurences(string) {
  let occurences = {};
  let listOfStrings = string.split(' ');

  for (let string of listOfStrings) {
    let stringToLower = string.toLowerCase();
    if (!occurences.hasOwnProperty(stringToLower)) {
      occurences[stringToLower] = 1;
    } else {
      occurences[stringToLower]++;
    }
  }
  let result = [];
  for (let [key, value] of Object.entries(occurences)) {
    if (value % 2 !== 0) {
      result.push(key);
    }
  };

  console.log(result.join(' '));
}