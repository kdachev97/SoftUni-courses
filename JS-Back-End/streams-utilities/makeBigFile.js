const fs = require('fs');

start();

async function start() {
  const stream = fs.createWriteStream('./bigFile.txt');

  for (let pass = 0; pass < 100; pass++) {
    for (let i = 0; i < 1000; i++) {
      const output = [];

      for (let k = 0; k < 100; k++) {
        output.push(('000000000000000' + Math.random() * 9999999999999999 | 0).toString())
      }
      await new Promise(res => {
        stream.write(output.join(''), res);
      });
    }
    process.stdout.write('.');
  }
  stream.end();
}