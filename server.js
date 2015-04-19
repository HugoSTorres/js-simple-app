var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/posts', function(req, res) {
  console.log("GET /posts");

  var data = require('./data.json');

  res.statusCode = 200;
  res.send(JSON.stringify(data));
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("simple-app server listening at http://%s:%s", host, port);
});
