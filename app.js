var express = require('express');
var app = express();
var evh = require('express-vhost');
var port = process.env.PORT || 9000;
app.use(evh.vhost(app.enabled('trust proxy')));
//app.listen(port);

//openalto.org
var appMain = require('./servers/main-server')
appMain.listen(port);
evh.register('openalto.org', appMain);

//interop.openalto.org
var appInterop = require('./servers/interop-server')
evh.register('interop.openalto.org', appInterop);

module.exports = appMain;
