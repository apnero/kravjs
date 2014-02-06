var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname ));

app.use(express.bodyParser());


var port = process.env.PORT || 8000;

app.listen(port);