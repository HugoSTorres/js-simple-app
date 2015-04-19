var express = require('express');
var app = express();
var db = require('monk')('localhost:27017/simple-appdb');

app.use(express.static('public'));

// A little DB middle-ware
app.use(function(req, res, next) {
  req.db = db;
  next();
});

app.get('/posts', function(req, res) {
  console.log("GET /posts");
  
  db.get('posts').find({})
    .success(function(docs) {
      res.statusCode = 200;
      res.send(JSON.stringify(docs));
    })
    .error(function(docs) {
      res.statusCode = 500;
      res.send("Error connecting to the database.");
    });
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log("simple-app server listening at http://%s:%s", host, port);
});
