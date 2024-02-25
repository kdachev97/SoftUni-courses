function schoolRegister(array) {
  let studentRegister = {};
  for (let line of array) {
    let tokens = line.split(', ');
    let grade = Number(tokens[1].split(': ')[1]) + 1;
    let name = tokens[0].split(': ')[1];
    let score = Number(tokens[2].split(': ')[1]);
    if (score > 3) {
      let student = { name, score };
      if (!studentRegister.hasOwnProperty(grade)) {
        studentRegister[grade] = [];
      }
      studentRegister[grade].push(student);
    }
  }
  let sortedGrades = Object.keys(studentRegister).sort((a, b) => a - b);
  for (let grade of sortedGrades) {
    let students = studentRegister[grade];
    console.log(`${grade} Grade`);
    console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
    console.log(`Average annual score from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
    console.log();
  }

  function average(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}