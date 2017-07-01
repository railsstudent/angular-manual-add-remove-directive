import { HomeService } from './home/HomeService';

export const services = angular.module('services', [])
  .factory('HomeService', HomeService.homeFactory);
