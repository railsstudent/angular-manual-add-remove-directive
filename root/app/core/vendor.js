module.exports = function() {
  /* Styles */
  require('../index.scss');
  /* Fontawesome */
  require('../../node_modules/font-awesome/css/font-awesome.min.css');

  /* JS */
  /* attach to global context. $ and jQuery for bootstrap */
  global.$ = global.jQuery = require('jquery');
  /* Will load all of Bootstrap's jQuery plugins onto the jQuery object */
  require('bootstrap');
  const angular = require('angular');
};
