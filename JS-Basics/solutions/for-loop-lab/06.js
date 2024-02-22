function vowelsSum(input) {
  let word = input[0];

  let vowelPoints = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  };

  let sum = 0;

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];
    if (letter in vowelPoints) {
      sum += vowelPoints[letter];
    }
  }
  console.log(sum);
}