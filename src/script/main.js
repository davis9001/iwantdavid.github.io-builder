var $ = require('jquery');
var foundation = require('foundation');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './templates/views');


$(document).foundation();

