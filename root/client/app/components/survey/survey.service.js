'use strict';
import _ from 'lodash';

let HomeService;
class SurveyService {
  constructor(_HomeService) {
    HomeService = _HomeService;
  }

  generateHtml(settingId, type) {
    let str = '';
    return new Promise(resolve => {
      HomeService.getSettings(settingId, type)
      .then(settings => {
        _.forEach(settings, (v, k) => {
          str += `<div class="form-group">`;
          str += `<label for="${k}">${k}</label>`;
          str += `<input type="text" name="${k}" id="${k}" required ng-model="vm.settings.${k}"></input>`;
          str += `</div>`;
          str += `<div ng-if="surveyForm.${k}.$invalid && !surveyForm.${k}.$pristine" ng-messages="surveyForm.${k}.$error" class="text-danger">`;
          str += `<div ng-message="required">This field is required</div>`;
          str += `</div>`;
        });
        return resolve(str);
      });
    });
  }
}
SurveyService.$inject = ['HomeService'];

export { SurveyService };
