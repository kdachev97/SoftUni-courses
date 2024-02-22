function examPreparation(input) {
  let badGrades = Number(input[0]);
  let i = 1;
  let numberOfTasks = 0;
  let lastTask;
  let totalGrades = 0;
  let poorGrades = 0;

  while (poorGrades < badGrades) {
    let taskName = input[i];
    let grade = Number(input[i + 1]);


    if (grade <= 4) {
      poorGrades++;
    }

    if (taskName === "Enough") {
      break;
    }

    numberOfTasks++;
    totalGrades += grade;

    lastTask = taskName;
    i += 2;

  }

  if (poorGrades >= badGrades) {
    console.log(`You need a break, ${poorGrades} poor grades.`);
  } else {
    console.log(`Average score: ${(totalGrades / numberOfTasks).toFixed(2)}`);
    console.log(`Number of problems: ${numberOfTasks}`)
    console.log(`Last problem: ${lastTask}`);
  }
}