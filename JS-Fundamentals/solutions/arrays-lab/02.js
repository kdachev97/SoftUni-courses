function dayOfWeek(input) {
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  console.log(days[input - 1] !== undefined ? days[input - 1] : "Invalid day!");
}