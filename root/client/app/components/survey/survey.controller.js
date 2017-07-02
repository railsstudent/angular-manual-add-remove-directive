'use strict';
import _ from 'lodash';

let SurveyService, HomeService, $timeout, $scope;
class SurveyController {

  constructor(_$scope, _SurveyService, _HomeService, _$timeout) {

    SurveyService = _SurveyService;
    HomeService = _HomeService;
    $timeout = _$timeout;
    $scope = _$scope;

    $scope.$on('destroy', () => {
        console.log('Survey directive is destroyed');
    });

    this.settings = {};
    this.initNewSurveyModel();
  }

  createSurvey() {
    console.log('Create survey button is clicked');
  }

  initNewSurveyModel() {
    HomeService.getSettings(this.settingId, this.type)
    .then(settings => {
        _.forEach(settings, (v, k) => this.settings[k] = '');
        console.log(this.settings);
        console.log($scope.surveyForm);
    });
  }
}
SurveyController.$inject = ['$scope', 'SurveyService', 'HomeService', '$timeout'];

export { SurveyController };
