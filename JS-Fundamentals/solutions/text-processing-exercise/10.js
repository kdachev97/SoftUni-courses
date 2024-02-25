function lettersChangeNumbers(string) {
  let lettersPosition = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
  };

  let array = string.split(' ').filter(x => x.length > 1);
  let final = 0;

  for (let entry of array) {
    let number = Number(entry.substring(1, entry.length - 1));

    let firstLetter = entry[0].toLowerCase();
    let lastLetter = entry.slice(-1).toLowerCase();

    if (firstLetter === entry[0]) {
      number *= lettersPosition[firstLetter];
    } else {
      number /= lettersPosition[firstLetter];
    }

    if (lastLetter === entry.slice(-1)) {
      number += lettersPosition[lastLetter];
    } else {
      number -= lettersPosition[lastLetter];
    }

    final += number;
  }

  console.log(final.toFixed(2));
}