var http = require("http"); //import http
var formidable = require("formidable"); //import formidable
var fs = require("fs"); //import filesystem

http.createServer(function (req, res) { //Create the server
  console.log("Connected"); //log to the console when the client connects
  if (req.url != "/fileupload") { //write out the client
    fs.readFile("client.html", function (err, data) {
      res.write(data);
      console.log("Client started");
      res.end();
    });
  }
  else {
    console.log("File uploaded");
    var form = new formidable.IncomingForm(); //create a object for the form
    form.parse(req, function (err, fields, files) { //parse the form
      fs.readFile(files.uploadfile.name, function (err, data) { //read the file
        console.log("File data:");
        console.log(data);
      });
    });
  }
}).listen(8080);
