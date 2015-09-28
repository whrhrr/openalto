var server = require('./server');
var app = server.create();

var router = require('../routers/main-router');
//app.get('/', router);
//app.get('/interop', router);
//app.post('/test', router);
app.use('/', router);
module.exports = app;

