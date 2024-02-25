function requiredReading(bookPages, pagesPerHour, days) {
  let totalTime = bookPages / pagesPerHour;
  let hoursPerDay = totalTime / days;

  console.log(hoursPerDay);
}