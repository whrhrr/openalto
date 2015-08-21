var express = require('express');
// var connect = require('connect');
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

var appInterop = express();

var evh = require('express-vhost');
var app = express();
var port = 9000;

//Express configuration
// appInterop.set('port', process.env.PORT || 3000);
appInterop.set('views', path.join(__dirname, 'views'));
appInterop.engine('html', engines.hogan);
appInterop.set('view engine', 'html');
appInterop.use(compress());
appInterop.use(assets({
      paths: ['public/css', 'public/js']
}));

appInterop.use(logger('dev'));
appInterop.use(favicon(path.join(__dirname, 'public/images/favicon.png')));
appInterop.use(bodyParser.urlencoded({ extended: true }));
appInterop.use(expressValidator());
appInterop.use(cookieParser());

appInterop.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Primary AppInterop Routes
 **/
appInterop.get('/', homeController.index);

/**
 * Error Handler.
 */
appInterop.use(errorHandler());

/**
 * Start Express server.
 */
// appInterop.listen(appInterop.get('port'), function() {
//       console.log('Express server listening on port %d in %s mode', appInterop.get('port'), appInterop.get('env'));
// });

app.use(evh.vhost(app.enabled('trust proxy')));
app.listen(port);
evh.register('openalto.org', appInterop);

var appBlog = express();
appBlog.get('/', function(req, res) {
    res.send("Welcome to our blog!");
});
evh.register('blog.openalto.org', appBlog);

module.exports = app;
