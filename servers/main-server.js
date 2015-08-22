var server = require('./server');
var app = server.create();

var router = require('../routers/main-router');
app.get('/', router);

module.exports = app;
