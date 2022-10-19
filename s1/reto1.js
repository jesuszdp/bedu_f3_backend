const http = require('http');
const hostname = '127.0.0.1';
const port = 3003;

const server = http.createServer((req, res) => {
    res.statusCode = 418; //I'm a teapot
    res.setHeader('Content-Type', 'application/json');
    let data = {success: true, canIGetCoffee: false, responseCode: 0123};
    res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
    console.log('Servidor corriendo!!!');
});