function rageQuit(input) {
  let splitPattern = /\d+/g;
  let numArray = input.match(splitPattern);
  let wordArray = input.split(splitPattern);
  let wordString = wordArray.join('').toUpperCase();
  let finalArray = [];
  let uniqueChars = "";

  for (let i = 0; i < wordString.length; i++) {
    if (uniqueChars.includes(wordString[i]) === false) {
      uniqueChars += wordString[i];
    }
  }

  for (let i = 0; i < wordArray.length; i++) {
    let formattedWord = (wordArray[i].repeat(numArray[i])).toUpperCase();
    finalArray.push(formattedWord);
  }

  console.log(`Unique symbols used ${uniqueChars.length}`);
  console.log(finalArray.join('').trim());
}