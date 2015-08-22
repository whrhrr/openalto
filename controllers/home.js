var index = require('./data/index.js')

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  var data = index.home_data(req, res);
  res.render('home', data);
};
