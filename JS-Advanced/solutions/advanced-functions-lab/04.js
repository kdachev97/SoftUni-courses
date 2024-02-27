function filterEmployees(data, criteria) {
  const parsedInput = JSON.parse(data);
  const [key, value] = criteria.split('-');

  function applyFilter(array) {
    return array.filter(item => item[key] === value);
  }

  const filteredData = applyFilter(parsedInput);

  const formattedResults = filteredData.map((employee, index) => {
    const fullName = `${employee.first_name} ${employee.last_name}`;
    return `${index}. ${fullName} - ${employee.email}`;
  });

  return formattedResults.join('\n');
}

const result = filterEmployees(`[{
  "id": "1",
  "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female"
  }, {
  "id": "2",
  "first_name": "Kizzee", "last_name": "Jost",
  "email": "kjost1@forbes.com", "gender": "Female"
  }, {
  "id": "3",
  "first_name": "Evanne", "last_name": "Maldin",
  "email": "emaldin2@hostgator.com", "gender": "Male"
  }]`, 'gender-Female');

console.log(result);