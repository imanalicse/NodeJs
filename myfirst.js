var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    debugger;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end('<br/>Hello World!');
}).listen(8080);