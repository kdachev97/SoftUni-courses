function listProcessor(array) {
  let state = [];

  let commands = {
    add,
    remove,
    print
  }

  for (let element of array) {
    const [command, value] = element.split(' ');
    if (commands[command]) {
      commands[command](value);
    }
  }

  function add(string) {
    state.push(string);
  }

  function remove(string) {
    state = state.filter((current) => {
      if (current !== string) {
        return current;
      }
    })
  }

  function print() {
    console.log(state.join(','));
  }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);