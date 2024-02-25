function employees(listOfEmployees) {
  for (let employee of listOfEmployees) {
    let employeeData = {
      name: employee,
      personalNumber: employee.length
    };

    console.log(`Name: ${employeeData.name} -- Personal Number: ${employeeData.personalNumber}`);
  }
}