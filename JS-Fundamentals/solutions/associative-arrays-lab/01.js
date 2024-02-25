function phoneBook(array) {
  let phoneBook = {};

  array.forEach(entry => {
    let [name, number] = entry.split(' ');

    phoneBook[name] = number;
  });

  for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}