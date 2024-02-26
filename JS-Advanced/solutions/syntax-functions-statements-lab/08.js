function daysInMonth(month, year) {
  let lastDayOfMonth = new Date(year, month - 1, 0).getDate();
  console.log(lastDayOfMonth);
}