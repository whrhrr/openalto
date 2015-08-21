var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var favicon = require('serve-favicon');

var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');

var mongoose = require('mongoose');
var expressValidator = require('express-validator');
var assets = require('connect-assets');
var engines = require('consolidate');

/**
 * Controllers (route handlers)
 **/
var homeController = require('./controllers/home');

/**
 * openalto.org
 **/
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compress());
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public/images/favicon.png')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(errorHandler());
app.get('/', homeController.index);

/**
 * blog.openalto.org
 **/
var appBlog = express();
appBlog.get('/', function(req, res) {
    res.send("Welcome to our blog!");
});

var main = express();
var evh = require('express-vhost');
var port = process.env.PORT || 9000;
main.use(evh.vhost(main.enabled('trust proxy')));
main.listen(port);
evh.register('openalto.org', app);
evh.register('blog.openalto.org', appBlog);

module.exports = main;
