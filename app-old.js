const http = require('http');

http.createServer((request, response) => {
    //console.log(request);
    //response.setHeader('Content-Disposition', 'attachment; filename=test.txt');
    //response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.writeHead(200);
    response.write('Home');
    response.end();
}).listen(8080);

console.log('Funciona el backend');
