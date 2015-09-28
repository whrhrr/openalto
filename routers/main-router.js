var express = require('express');
var router = express.Router();
var index = require('../lib/data/index.js')
var interop_index = require('../lib/data/interop-index.js')

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/', function(req, res, next){
  var data = index.home_data(req, res);
  res.render('main/index', data);
});

router.get('/interop', function(req, res, next){
  res.render('interop/index', {
    title: "Interop"
  });
//  var data = index.home_data(req, res);
//  res.render('main/index', data);
});

router.post('/test', function(req, res, next){
  interop_index.get_test_data(req, res, function(stdout) {
    res.send(stdout);
  });
});

module.exports = router
