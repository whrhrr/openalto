var server = require('./server');
var app = server.create();

var router = require('../routers/interop-router');
app.use('/', router);

module.exports = app;
