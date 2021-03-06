var express = require('express');
var fs = require('fs');
var buf = new Buffer(256);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

  buf = fs.readFileSync('index.html');
  var resul = buf.toString('utf-8');
  response.send(resul);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
