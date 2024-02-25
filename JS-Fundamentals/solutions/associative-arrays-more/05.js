function softUniStudents(input) {
  let courseList = {};

  for (let line of input) {
    if (line.includes(': ')) {
      let courseName = line.split(': ')[0];
      let capacity = Number(line.split(': ')[1]);

      if (!Object.keys(courseList).includes(courseName)) {
        courseList[courseName] = { capacity: capacity, students: [] };
      } else {
        courseList[courseName].capacity += capacity;
      }
    } else if (line.includes('joins')) {
      let courseName = line.split(' joins ')[1];
      let studentDetails = line.split(' joins ')[0];
      let studentUsernameAndCredits = studentDetails.split(' with email ')[0];
      let studentUsername = studentUsernameAndCredits.split('[')[0];
      let studentCredits = Number(studentUsernameAndCredits.split('[')[1].split(']')[0]);
      let studentEmail = studentDetails.split(' with email ')[1];

      if (courseList[courseName] && courseList[courseName].students.length < courseList[courseName].capacity) {
        courseList[courseName].students.push({ username: studentUsername, credits: studentCredits, email: studentEmail });
      }
    }
  }

  // Sort courses by count of students in descending order
  let sortedCourses = Object.entries(courseList).sort((a, b) => b[1].students.length - a[1].students.length);

  // Output
  for (let [courseName, courseDetails] of sortedCourses) {
    let placesLeft = courseDetails.capacity - courseDetails.students.length;
    console.log(`${courseName}: ${placesLeft} places left`);

    // Sort students by credits in descending order
    let sortedStudents = courseDetails.students.sort((a, b) => b.credits - a.credits);

    // Output students
    for (let student of sortedStudents) {
      console.log(`--- ${student.credits}: ${student.username}, ${student.email}`);
    }
  }
}