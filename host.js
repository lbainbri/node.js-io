var http = require("http"); //import http
var formidable = require("formidable"); //import formidable
var fs = require("fs"); //import filesystem

http.createServer(function (req, res) { //Create the server
  console.log("Connected"); //log to the console when the client connects
  if (req.url != "/fileupload") { //write out the client
    fs.readFile("client.html", function (err, data) {
      if (err) {
          console.error(err); //return if there is an error
          return;
      }
      res.write(data);
      console.log("Client started");
      res.end();
    });
  }
  else {
    console.log("File uploaded");
    var form = new formidable.IncomingForm(); //create a object for the form
    form.parse(req, function (err, fields, files) { //parse the form
    //Read the file w/ utf8 (8-bit unicode tranformation format) encoding
      fs.readFile(files.uploadfile.path, "utf8", function (err, data) {
        if (err) {
          console.error(err); //return if there is an error
          return;
        }
        console.log("File data:");
        console.log(data);
        res.write("File data recieved\n");
        res.write(data); //output the data of the file to the client
        res.end();
      });
    });
  }
}).listen(8080);
