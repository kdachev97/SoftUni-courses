function makeDictionary(array) {
  let dictionary = {};

  for (let object of array) {
    let parsedObject = JSON.parse(object);
    let key = Object.keys(parsedObject)[0];
    let value = parsedObject[key];
    dictionary[key] = value;
  }
  let sortedKeys = Object.keys(dictionary).sort();

  for (let key of sortedKeys) {
    console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
  }
}