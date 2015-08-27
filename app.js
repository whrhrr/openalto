var express = require('express');
var app = express();
var evh = require('express-vhost');
var port = process.env.PORT || 9000;
app.use(evh.vhost(app.enabled('trust proxy')));
app.listen(port);

//openalto.org
var appMain = require('./servers/main-server')
evh.register('openalto.org', appMain);

//interop.openalto.org
var appInterop = require('./servers/interop-server')
evh.register('interop.openalto.org', appInterop);

//blog.openalto.org
var appBlog = require('./servers/blog-server')
evh.register('blog.openalto.org', appBlog);

module.exports = app;
