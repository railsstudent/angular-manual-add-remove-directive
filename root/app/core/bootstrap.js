/*jshint browser:true */
'use strict';

import { default as config } from './config/production';

// bootstrap angular, instead of adding ng-app in index.html
// load angular, replace <script src="bower_components/angular/angular.min.js">
require('./vendor')();   // run an empty function
// load the main app filename
var appModule = require('../index');
if (process.env.NODE_ENV === 'production') {
    // jshint ignore:line
    config(appModule);
}

// replace ng-app="appName"
// appModule.name will be taken from index.js
angular.element(document).ready(() => {
  angular.bootstrap(document, [appModule.name], {
      // strictDi: true
  });
});
