var resources = require('../constants/resources.json')

exports.home_data = function(req, res) {
  return {
    title: 'Home',
    resourceStr: JSON.stringify(resources)
  }
}
