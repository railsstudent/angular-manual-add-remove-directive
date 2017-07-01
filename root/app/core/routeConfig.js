import homeTemplate from './home/home.html';
import aboutTemplate from './about/about.html';

export default function($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
           template : homeTemplate,
           controller : 'homeController',
           controllerAs : 'hc'
       })
       .when('/home', {
         template : homeTemplate,
         controller : 'homeController',
         controllerAs : 'hc'
       })
       .when('/about', {
         template : aboutTemplate,
         controller : 'aboutController',
         controllerAs : 'ac'
       })
       .otherwise('/');

       // configure html5 to get links working on jsfiddle
       $locationProvider.html5Mode(true);
 }
