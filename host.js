var http = require("http"); //import http
var formidable = require("formidable"); //import formidable
var fs = require("fs"); //import filesystem

http.createServer(function (req, res) { //Create the server
  console.log("Connected"); //log to the console when the client connects
  var form = new formidable.IncomingForm(); //create a object for the form
  form.parse(req, function (err, fields, files) { //parse the form
    fs.readFile(files.uploadfile.name, function (err, data) { //read the file
      console.log(data);
    });
    res.write('File uploaded');
    res.end();
  });
}).listen(8080);
