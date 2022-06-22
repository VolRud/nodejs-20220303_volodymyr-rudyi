const http = require('http');
const fs = require('fs');

const server = http.createServer();
// const stream = fs.createReadStream();

// stream.on('data', (chunk) => console.log(chunk));
// stream.on('end', () => console.log('end'))
let n = 0;
// server.on('request', (req, res) => {
    ++n;
    // res.write(`'Hell', ${n}`)
    res.end('END');
});

server.listen(3000);