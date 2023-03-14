const http = require('node:http')

const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=> {
    let url = req.url.split('/')

    if(url[1] === ''){
        if(req.method === 'GET'){
            res.end('Hello, Galvanize')
        }
    }
    res.statusCode = 404;
    res.end();
})

server.listen(port, hostName, () => {
    console.log(`server running at http://localhost:3000`);
})