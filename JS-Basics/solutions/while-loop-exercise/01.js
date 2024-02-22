function oldBooks(input) {
  let favoriteBook = input[0];
  let i = 1;
  while (i < input.length) {
    let command = input[i];

    if (command === favoriteBook) {
      console.log(`You checked ${i - 1} books and found it.`);
    } else if (command === "No More Books") {
      console.log(`
      The book you search is not here!
      You checked ${i - 1} books.
      `);
    }
    i++;
  }
}