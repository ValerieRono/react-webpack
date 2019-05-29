
var path = require('path');
var express = require('express');
const PORT = process.env.PORT || 9000;
var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

var server = app.listen(PORT, function () {
  console.log('listening on port ', server.address().port);
});