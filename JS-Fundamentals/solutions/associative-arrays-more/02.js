function armies(array) {
  let armyLeaders = {};

  for (let tokens of array) {
    let line = tokens.split(', ');

    if (line[0].includes('arrives')) {
      let leaderArray = line[0].split(' ');
      leaderArray.pop();
      let leader = leaderArray.join(' ');
      armyLeaders[leader] = [];
    } else if (line[0].includes(':')) {
      let [leader, armyName] = line[0].split(': ');
      let armyCount = Number(line[1]);

      if (Object.keys(armyLeaders).includes(leader)) {
        let armyObject = { [armyName]: armyCount };
        armyLeaders[leader].push(armyObject);
      }
    } else if (line[0].includes('+')) {
      let [armyName, armyCount] = line[0].split(' + ');
      armyCount = Number(armyCount);

      for (let leader in armyLeaders) {
        let leaderArmies = armyLeaders[leader];
        for (let army of leaderArmies) {
          if (army.hasOwnProperty(armyName)) {
            army[armyName] += armyCount;
          }
        }
      }
    } else if (line[0].includes('defeated')) {
      let leaderArray = line[0].split(' ');
      leaderArray.pop();
      let leader = leaderArray.join(' ');
      delete armyLeaders[leader];
    }
  }

  // Sort leaders by total army count in descending order
  let sortedLeaders = Object.entries(armyLeaders)
    .sort((a, b) => {
      let totalA = a[1].reduce((acc, army) => acc + Object.values(army)[0], 0);
      let totalB = b[1].reduce((acc, army) => acc + Object.values(army)[0], 0);
      return totalB - totalA;
    });

  for (let [leader, armies] of sortedLeaders) {
    // Sort armies by count in descending order
    armies.sort((a, b) => Object.values(b)[0] - Object.values(a)[0]);

    let totalArmyCount = armies.reduce((acc, army) => acc + Object.values(army)[0], 0);
    console.log(`${leader}: ${totalArmyCount}`);
    for (let army of armies) {
      console.log('>>> ' + Object.entries(army).map(([key, value]) => `${key} - ${value}`).join('\n'));
    }
  }
}