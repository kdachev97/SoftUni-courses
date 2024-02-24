function pyramid(base, increment) {
  let height = 0;
  let step = 0;
  let stone = 0;
  let marble = 0;
  let lapis = 0;
  let gold = 0;

  for (let i = base; i >= 1; i -= 2) {
    step++;
    height += increment;
    if (i !== 2 && i !== 1) {
      stone += (i - 2) * (i - 2) * increment;
      if (step % 5 !== 0) {
        marble += (i * 4 - 4) * increment;
      } else {
        lapis += (i * 4 - 4) * increment;
      }
    } else {
      gold += i * i * increment;
    }
  }

  console.log(`
  Stone required: ${Math.ceil(stone)}
  Marble required: ${Math.ceil(marble)}
  Lapis Lazuli required: ${Math.ceil(lapis)}
  Gold required: ${Math.ceil(gold)}
  Final pyramid height: ${Math.floor(height)}
  `);
}