const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.write('OK');
    res.end();
  } else if (req.method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const result = JSON.parse(body.join(''));
      console.log(result);

      result.count++;

      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.write(JSON.stringify(result));
      res.end();
    });
  }
});

server.listen(3000);