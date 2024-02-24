function nextDay(year, month, day) {
  const currentDate = new Date(year, month - 1, day);
  currentDate.setDate(currentDate.getDate() + 1);

  const formattedMonth = String(currentDate.getMonth() + 1);
  const formattedDay = String(currentDate.getDate());
  const formattedYear = currentDate.getFullYear();

  const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;

  console.log(formattedDate);
}