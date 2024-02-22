function readingList(input) {
  let numberOfPages = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let numberOfDays = Number(input[2]);
  console.log((numberOfPages / pagesPerHour) / numberOfDays);
}