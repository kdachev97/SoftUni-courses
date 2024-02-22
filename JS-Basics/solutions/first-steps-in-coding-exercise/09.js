function aquarium(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percentage = Number(input[3]) / 100;
  let volume = length * width * height;
  console.log(volume / 1000 * (1 - percentage));
}