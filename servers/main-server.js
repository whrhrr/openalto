var express = require('express');
var path = require('path');
var server = require('./server');

var homeController = require('../controllers/home');
var app = server.create();

app.get('/', homeController.index);
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));

module.exports = app;
