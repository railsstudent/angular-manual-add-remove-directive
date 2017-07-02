'use strict';

/* import jquery */
// import $ from 'jquery';
// window.JQuery = $;

/* import angular */
import angular from 'angular';

/* import angular route */
import ngRoute from 'angular-route';

import '../../node_modules/font-awesome/css/font-awesome.min.css';

import { config } from './config/production';

/* import controller and service */
import { appDirective } from './app.directive';
import { home } from './components/home/home';
import { survey } from './components/survey/survey';

const appModule = angular.module('app', [
    ngRoute,
    home.name,
    survey.name
  ])
  .directive('app', appDirective);

console.log('environment: ' + process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    // jshint ignore:line
    config(appModule);
}
