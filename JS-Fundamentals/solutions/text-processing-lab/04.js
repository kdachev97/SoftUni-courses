function countStringOccurences(text, word) {
  console.log(text.split(' ').filter(x => x === word).length);
}