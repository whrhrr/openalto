var express = require('express');
var router = express.Router();
var index = require('../lib/data/index.js')

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
  res.send("Congratulations! All tests are passed");
});

module.exports = router
