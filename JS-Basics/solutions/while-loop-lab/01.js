function readText(input) {
  let i = 0;

  while (i < input.length) {
    let word = input[i];

    if (word === "Stop") {
      break;
    }

    console.log(word);
    i++;
  }
}
