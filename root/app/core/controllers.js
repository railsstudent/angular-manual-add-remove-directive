import { AboutController } from './about/AboutController';
import { HomeController } from './home/HomeController';

export const controllers = angular.module('controllers', [])
  .controller('aboutController', AboutController)
  .controller('homeController', HomeController);
