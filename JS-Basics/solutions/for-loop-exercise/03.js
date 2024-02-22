function histogram(input) {

  let n = Number(input[0]);

  let v1 = 0.0;
  let v2 = 0.0;
  let v3 = 0.0;
  let v4 = 0.0;
  let v5 = 0.0;

  for (let i = 1; i <= n; i++) {
    let currentNum = Number(input[i])

    if (currentNum < 200) {
      v1++;
    }
    else if (currentNum <= 399) {
      v2++;
    }
    else if (currentNum <= 599) {
      v3++;
    }
    else if (currentNum <= 799) {
      v4++;
    }
    else if (currentNum <= 1000) {

      v5++;
    }
  }

  let p1Percentage = (v1 / n * 100);
  let p2Percentage = (v2 / n * 100);
  let p3Percentage = (v3 / n * 100);
  let p4Percentage = (v4 / n * 100);
  let p5Percentage = (v5 / n * 100);

  console.log(p1Percentage.toFixed(2) + "%");
  console.log(p2Percentage.toFixed(2) + "%");
  console.log(p3Percentage.toFixed(2) + "%");
  console.log(p4Percentage.toFixed(2) + "%");
  console.log(p5Percentage.toFixed(2) + "%");
}