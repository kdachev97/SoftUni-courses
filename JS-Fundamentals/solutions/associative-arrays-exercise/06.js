function wordOccurrences(array) {
  let result = {};

  for (let tokens of array) {
    let word = tokens.split(', ');

    if (result.hasOwnProperty(word)) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  let sortedByCount = Object.keys(result)
    .sort((a, b) => result[b] - result[a])
    .map(key => `${key} -> ${result[key]} times`);

  console.log(sortedByCount.join('\n'));
}