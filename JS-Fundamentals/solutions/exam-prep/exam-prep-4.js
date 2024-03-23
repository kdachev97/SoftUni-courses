function worldTour(input) {
  let actions = {
    'Add Stop': add,
    'Remove Stop': remove,
    'Switch': swap
  }
  let result = input.shift();

  while (input[0] !== 'Travel') {
    let tokens = input.shift().split(':');
    let command = tokens[0];
    let action = actions[command];
    action(tokens[1], tokens[2]);

    console.log(result);
  }

  console.log(`Ready for world tour! Planned stops: ${result}`);

  function add(index, string) {
    index = Number(index);
    if (validate(index)) {
      let left = result.substring(0, index);
      let right = result.substring(index);
      result = left + string + right;
    }
  }

  function remove(start, end) {
    start = Number(start);
    end = Number(end);
    if (validate(start) && validate(end)) {
      let left = result.substring(0, start);
      let right = result.substring(end + 1);
      result = left + right;
    }
  }

  function swap(oldString, newString) {
    let pattern = new RegExp(oldString, 'g');
    result = result.replace(pattern, newString);
  }

  function validate(index) {
    return (index >= 0) && (index < result.length);
  }
}

worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"])

function fancyBarcode(input) {
  const regexPattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
  const digitPattern = /[0-9]/g;

  let barcodeCount = Number(input.shift());

  for (let i = 0; i < barcodeCount; i++) {
    let currBarcode = input[i];

    if (regexPattern.test(currBarcode)) {
      let digits = currBarcode.match(digitPattern);

      if (digits) {
        let productGroup = digits.join('');
        console.log(`Product group: ${productGroup}`);
      } else {
        console.log('Product group: 00');
      }
    } else {
      console.log('Invalid barcode');
    }
  }
}

fancyBarcode(["3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"])

function thePianist(input) {
  let actions = {
    'Add': add,
    'Remove': remove,
    'ChangeKey': changeKey
  }
  let catalog = {};

  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, composer, key] = input.shift().split('|');
    catalog[name] = {
      composer,
      key
    }
  };

  while (input[0] !== 'Stop') {
    let tokens = input.shift().split('|');
    let command = tokens[0];
    let name = tokens[1];
    let action = actions[command];
    action(name, tokens[2], tokens[3]);
  }

  // let sorted = Object.entries(catalog).sort(comparePieces);

  for (let [name, piece] of Object.entries(catalog)) {
    console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }

  function comparePieces(a, b) {
    let nameA = a[0];
    let nameB = b[0];

    let composerA = a[1].composer;
    let composerB = b[1].composer;

    return (nameA.localeCompare(nameB)) || (composerA.localeCompare(composerB));
  }

  function add(name, composer, key) {
    if (catalog[name] !== undefined) {
      console.log(`${name} is already in the collection!`);
    } else {
      catalog[name] = {
        composer,
        key
      };
      console.log(`${name} by ${composer} in ${key} added to the collection!`);
    }
  }

  function remove(name) {
    if (catalog[name] === undefined) {
      console.log(`Invalid operation! ${name} does not exist in the collection.`);
    } else {
      delete catalog[name];
      console.log(`Successfully removed ${name}!`);
    }
  }

  function changeKey(name, newKey) {
    if (catalog[name] === undefined) {
      console.log(`Invalid operation! ${name} does not exist in the collection.`);
    } else {
      catalog[name].key = newKey;
      console.log(`Changed the key of ${name} to ${newKey}!`)
    }
  }
}

thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor', 'Add|Hungarian Rhapsody No.2|Liszt|C# Minor', 'Add|Fur Elise|Beethoven|C# Minor', 'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
])