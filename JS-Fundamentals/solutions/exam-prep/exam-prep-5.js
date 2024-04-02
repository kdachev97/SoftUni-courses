function passwordValidator(input) {
  let password = input.shift();

  function makeUpper(index) {
    if (index >= 0 && index < password.length) {
      password = password.substring(0, index) + password.charAt(index).toUpperCase() + password.substring(index + 1);
      console.log(password);
    }
  }

  function makeLower(index) {
    if (index >= 0 && index < password.length) {
      password = password.substring(0, index) + password.charAt(index).toLowerCase() + password.substring(index + 1);
      console.log(password);
    }
  }

  function insert(index, char) {
    if (index >= 0 && index <= password.length) {
      password = password.substring(0, index) + char + password.substring(index);
      console.log(password);
    }
  }

  function replace(char, value) {
    const charCode = char.charCodeAt(0);
    const newValue = String.fromCharCode(charCode + value);
    password = password.split(char).join(newValue);
    console.log(password);
  }

  function validatePassword() {
    let valid = true;
    if (password.length < 8) {
      console.log("Password must be at least 8 characters long!");
      valid = false;
    }
    if (!password.match(/^[a-zA-Z0-9_]+$/)) {
      console.log("Password must consist only of letters, digits and _!");
      valid = false;
    }
    if (!password.match(/[A-Z]/)) {
      console.log("Password must consist at least one uppercase letter!");
      valid = false;
    }
    if (!password.match(/[a-z]/)) {
      console.log("Password must consist at least one lowercase letter!");
      valid = false;
    }
    if (!password.match(/[0-9]/)) {
      console.log("Password must consist at least one digit!");
      valid = false;
    }
    return valid;
  }

  for (const line of input) {
    const [command, ...params] = line.split(' ');
    switch (command) {
      case 'Make':
        const [caseType, index] = params;
        if (caseType === 'Upper') {
          makeUpper(Number(index));
        } else if (caseType === 'Lower') {
          makeLower(Number(index));
        }
        break;
      case 'Insert':
        const [insertIndex, insertChar] = params;
        insert(Number(insertIndex), insertChar);
        break;
      case 'Replace':
        const [replaceChar, replaceValue] = params;
        replace(replaceChar, Number(replaceValue));
        break;
      case 'Validation':
        validatePassword();
        break;
      default:
        break;
    }
  }
}

passwordValidator(['123456789',
  'Insert 3 R',
  'Replace 5 15',
  'Validation',
  'Make Lower 3',
  'Complete'])

function processPasswords(input) {
  let count = input.shift();
  let pattern = /(.+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^\<\>]{3})\<\1/;
  for (let i = 0; i < count; i++) {
    let result = input[i].match(pattern);
    if (result !== null) {
      console.log(`Password: ${result[2]}${result[3]}${result[4]}${result[5]}`);
    } else {
      console.log("Try another password!");
    }
  }
}

processPasswords(["3",
  "##>00|no|NO|!!!?<###",
  "##>123|yes|YES|!!!<##",
  "$$<111|noo|NOPE|<<>$$"]
);

function wildZoo(input) {
  let animals = {};
  let areas = {};

  for (const line of input) {
    if (line === 'EndDay') break;

    const [command, details] = line.split(': ');

    if (command === 'Add') {
      let [animalName, neededFood, area] = details.split('-');
      neededFood = Number(neededFood);
      if (!animals[animalName]) {
        animals[animalName] = { neededFood, area };
        if (!areas[area]) {
          areas[area] = 1;
        } else {
          areas[area]++;
        }
      } else {
        animals[animalName].neededFood += neededFood;
      }
    } else if (command === 'Feed') {
      let [animalName, food] = details.split('-');
      food = Number(food);
      if (animals[animalName]) {
        animals[animalName].neededFood -= food;
        if (animals[animalName].neededFood <= 0) {
          console.log(`${animalName} was successfully fed`);
          areas[animals[animalName].area]--;
          delete animals[animalName];
        }
      }
    }
  }

  console.log('Animals:');
  Object.entries(animals).forEach(([name, data]) => {
    console.log(` ${name} -> ${data.neededFood}g`);
  });

  console.log('Areas with hungry animals:');
  Object.entries(areas).forEach(([area, count]) => {
    if (count > 0) {
      console.log(` ${area}: ${count}`);
    }
  });
}

wildZoo(["Add: Bonie-3490-RiverArea",
  "Add: Sam-5430-DeepWoodsArea",
  "Add: Bonie-200-RiverArea",
  "Add: Maya-4560-ByTheCreek",
  "Feed: Maya-2390",
  "Feed: Bonie-3500",
  "Feed: Johny-3400",
  "Feed: Sam-5500",
  "EndDay"]

);

