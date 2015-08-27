var express = require('express');
var router = express.Router();
var index = require('../lib/data/interop-index.js')

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/', function(req, res, next){
  res.render('interop/index', {
    title: "Interop"
  });
});

router.post('/test', function(req, res, next){
  index.get_test_data(req, res, function(stdout) {
    res.send(stdout);
  });
});

module.exports = router
