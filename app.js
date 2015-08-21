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

var app = express();

//Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compress());
app.use(assets({
      paths: ['public/css', 'public/js']
}));

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public/images/favicon.png')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary App Routes
 **/
app.get('/', homeController.index);

/**
 * Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
      console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;
