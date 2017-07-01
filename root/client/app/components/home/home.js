import angular from 'angular';
import { homeDirective } from './home.directive';
import { HomeService } from './home.service';

/* import angular route */
import ngRoute from 'angular-route';

export const home = angular.module('home', [ngRoute])
  .config(function($routeProvider, $locationProvider) {
       $routeProvider
         .when('/', {
           template : '<home></home>'
         })
         .when('/home', {
           template : '<home></home>'
         })
         .otherwise('/');

         // configure html5 to get links working on jsfiddle
         $locationProvider.html5Mode(true);
   }
)
.directive('home', homeDirective)
.service('HomeService', HomeService);
