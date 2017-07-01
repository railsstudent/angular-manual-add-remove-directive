import './home.scss';
import template from './home.html';
import { HomeController as controller } from './home.controller';

export const homeDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    restrict: 'E',
    scope: {},
    replace: true
  };
};
