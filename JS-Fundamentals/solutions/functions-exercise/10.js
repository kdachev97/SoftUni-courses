function loadingBar(number) {
  let bar = [];
  let lastPercentIndex = 0;

  for (let i = 1; i <= number / 10; i++) {
    let percent = '%';
    bar.push(percent);
    lastPercentIndex = i;
  }

  for (let j = lastPercentIndex; j < 10; j++) {
    let dot = '.';
    bar.push(dot);
  }

  let finalBar = `[${bar.join('')}]`;

  if (lastPercentIndex !== 10) {
    console.log(`${lastPercentIndex * 10}% ${finalBar}`);
    console.log('Still loading...');
  } else {
    console.log('100% Complete!');
    console.log(`${finalBar}`);
  }
}