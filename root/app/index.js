'use strict';

/* import angular route */
import ngRoute from 'angular-route';

/* import controller and service */
import { controllers } from './core/controllers';
import { services } from './core/services';
import { default as routing } from './core/routeConfig';

module.exports = angular.module('app', [
  ngRoute,
  controllers.name,
  services.name])
   .config(routing);
console.log('environment: ' + process.env.NODE_ENV);
