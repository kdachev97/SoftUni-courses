function workingHours(input) {
  let hour = Number(input[0]);
  let day = input[1];

  const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (hour >= 10 && hour <= 18 && workingDays.includes(day)) {
    console.log('open');
  } else {
    console.log('closed');
  }
}