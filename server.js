var express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();
app.listen(3000);

app.use(morgan('dev'));


app.use(express.static(__dirname));


app.get('/', function(err,res) {
	res.sendFile(__dirname + '/polymer/index.html');
});

console.log('server running at port 3000');
