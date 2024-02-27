function cars(array) {
  let objects = {};

  let commands = {
    create,
    set,
    print,
  };

  for (let element of array) {
    const [command, name, action, value] = element.split(' ');
    if (commands[command]) {
      commands[command](name, action, value);
    }
  }

  function create(name, action, parentName) {
    if (action === 'inherit') {
      objects[name] = Object.create(objects[parentName]);
    } else {
      objects[name] = {};
    }
  }

  function set(name, key, value) {
    objects[name][key] = value;
  }

  function print(name) {
    let output = [];
    const obj = objects[name];

    for (let key in obj) {
      output.push(`${key}:${obj[key]}`);
    }

    console.log(output.join(','))
  }
}

cars([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2'
]);