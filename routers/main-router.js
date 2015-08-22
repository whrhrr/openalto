var express = require('express');
var router = express.Router();
var index = require('../lib/data/index.js')

router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

router.get('/', function(req, res){
  var data = index.home_data(req, res);
  res.render('main/index', data);
});

module.exports = router
