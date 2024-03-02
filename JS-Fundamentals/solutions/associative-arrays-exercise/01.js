function wordTracker(listOfStrings) {
  let wordsToSearch = listOfStrings.shift().split(' ');

  let words = {};

  for (let word of wordsToSearch) {
    words[word] = 0;
  }

  for (let word of listOfStrings) {
    // if (Object.keys(words).includes(word)) {
    if (words.hasOwnProperty(word)) {
      words[word] += 1;
    }
  }

  let sortedWords = Object.keys(words)
    .sort((a, b) => words[b] - words[a])
    .map(key => `${key} - ${words[key]}`);

  console.log(sortedWords.join('\n'));
}