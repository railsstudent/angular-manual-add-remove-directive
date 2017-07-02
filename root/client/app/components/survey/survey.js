import angular from 'angular';
import { surveyDirective } from './survey.directive';
import { SurveyService } from './survey.service';

export const survey = angular.module('survey', [])
.directive('survey', surveyDirective)
.service('SurveyService', SurveyService);
