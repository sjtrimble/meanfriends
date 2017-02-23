var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var root = __dirname;
var mongoose = require('mongoose');

app.use(express.static(path.join( root, './client')));
app.use(express.static(path.join( root, './bower_components')));
app.use(bodyParser.json());
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(8000, function() {
    console.log("server listening on port 8000");
})