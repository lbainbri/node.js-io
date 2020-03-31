var http = require("http"); //import http
var formidable = require("formidable"); //import formidable

http.createServer(function (req, res) { //Create the server
  console.log("Connected"); //log to the console when the client connects
  var form = new formidable.IncomingForm(); //create a object for the form
  form.parse(req, function (err, fields, files) { //parse the form
    res.write('File uploaded');
    res.end();
  });
}).listen(8080);
