function schoolGrades(array) {
  let students = {};

  for (let tokens of array) {
    let [name, ...grades] = tokens.split(' ');

    if (!students[name]) {
      students[name] = {
        grades: grades.map(Number),
        average: 0
      };
    } else {
      students[name].grades.push(...grades.map(Number));
    }
  }

  for (let student in students) {
    let grades = students[student].grades;
    let average = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
    students[student].average = average;
  }

  let sortedStudents = Object.keys(students)
    .sort((a, b) => a.localeCompare(b))
    .map(student => `${student}: ${students[student].average}`);

  console.log(sortedStudents.join('\n'));
}