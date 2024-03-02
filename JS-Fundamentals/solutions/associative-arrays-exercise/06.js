function companyUsers(array) {
  let companyList = {};

  for (let tokens of array) {
    let [companyName, userId] = tokens.split(' -> ');

    if (!companyList.hasOwnProperty(companyName)) {
      companyList[companyName] = [];
    }

    if (!companyList[companyName].includes(userId)) {
      companyList[companyName].push(userId);
    }
  }

  let sortByName = Object.keys(companyList)
    .sort((a, b) => a.localeCompare(b))
    .map(key => `${key} \n -- ${companyList[key].join(' \n -- ')}`);

  console.log(sortByName.join('\n'));
}