const fs = require('fs').promises;

start();
async function start() {
 const data = await fs.readFile('./demo.txt');
 console.log(data.toString());
}