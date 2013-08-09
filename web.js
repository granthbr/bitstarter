var express = require('express');
var app = express();
var fs=require("fs");

var buffer = fs.readFileSync("index.html", "utf8");

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
