var index = require('./data/index.js')

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  var data = index.home_data(req, res);
  console.log(data)
  res.render('home', data);
};
