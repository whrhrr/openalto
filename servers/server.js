var express = require('express');
var compress = require('compression');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var assets = require('connect-assets');
var favicon = require('serve-favicon');
var engines = require('consolidate');
var path = require('path');

module.exports.create = function(){
  var app = express();

  app.set('view engine', 'jade');
  app.use(compress());
  app.use(logger('dev'));
  app.use(favicon(path.join(__dirname, '../public/images/favicon.png')));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set('views', path.join(__dirname, '../views'));
  app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600000 }));
  app.use(expressValidator());
  app.use(cookieParser());
  app.use(errorHandler());
  return app;
};
