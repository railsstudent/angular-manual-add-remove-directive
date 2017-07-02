'use strict';

let SurveyService, HomeService, $timeout, $scope;
class SurveyController {

  constructor(_$scope, _SurveyService, _HomeService, _$timeout) {

    SurveyService = _SurveyService;
    HomeService = _HomeService;
    $timeout = _$timeout;
    $scope = _$scope;
  }
}
SurveyController.$inject = ['$scope', 'SurveyService', 'HomeService', '$timeout'];

export { SurveyController };
