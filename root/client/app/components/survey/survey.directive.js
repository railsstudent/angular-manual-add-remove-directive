import './survey.scss';
import template from './survey.html';
import { SurveyController as controller } from './survey.controller';

export const surveyDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    restrict: 'E',
    scope: {
      state: "@",
      settingId: "@",
      "type": "@",
      "template": "@"
    },
    replace: true,
    link: (scope, element, attrs) => {
      console.log(attrs);
    }
  };
};
