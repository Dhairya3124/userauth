'use strict';
module.exports = function (app) {
  var user = require('../controllers/controller');
  // user Routes
  app.route('/api/signup').post(user.register);
  app.route('/api/login').post(user.sign_in);
  app.route('/api/check-auth').get(user.loginRequired, user.profile);
};
