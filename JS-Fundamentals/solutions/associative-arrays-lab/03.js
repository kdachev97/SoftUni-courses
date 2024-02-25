function addressBook(array) {
  let book = {};
  let unsortedAddressBook = [];

  array.forEach(entry => {
    let [name, address] = entry.split(':');

    book[name] = address;
  });

  for (key in book) {
    unsortedAddressBook.push(`${key} -> ${book[key]}`);
  }

  let sortedAddressBook = unsortedAddressBook.sort((a, b) => a.localeCompare(b));
  console.log(sortedAddressBook.join('\n'))
}