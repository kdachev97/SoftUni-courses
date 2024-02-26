function wordsUppercase(string) {
  let pattern = /\w+/g;
  let resultsArray = string.match(pattern);

  let finalArray = resultsArray.map(word => word.toUpperCase());
  console.log(finalArray.join(', '));
}