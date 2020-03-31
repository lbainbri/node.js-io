var http = require("http");

http.createServer(function (req, res) {
  console.log("Connected");
  res.end();
}).listen(8080);
