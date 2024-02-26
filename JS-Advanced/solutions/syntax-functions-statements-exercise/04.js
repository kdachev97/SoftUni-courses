function previousDay(year, month, day) {
  const date = new Date(year, month - 1, day);
  const resultDate = new Date();
  resultDate.setTime(date.getTime() - 1);
  console.log(`${resultDate.getFullYear()}-${resultDate.getMonth() + 1}-${resultDate.getDate()}`);
}