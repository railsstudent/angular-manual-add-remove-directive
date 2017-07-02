'use strict';

let HomeService, $timeout, $scope, $compile;
class HomeController {

  constructor(_$scope, _HomeService, _$timeout, _$compile) {

    HomeService = _HomeService;
    $timeout = _$timeout;
    $scope = _$scope;
    $compile = _$compile;

    this.init();
    this.loadData();

    $scope.$watchCollection (() => [ this.selectedType, this.selectedTemplate ], (n, o) => {
      const [ selectedType = null, selectedTemplate = null ] = n;
      const [ oldSelectedType = null, oldSelectedTemplate = null ] = o;

      console.log(oldSelectedType);
      console.log(selectedType);
      console.log(oldSelectedTemplate);
      console.log(selectedTemplate);
      if (selectedType &&
          ( (selectedTemplate && oldSelectedTemplate &&
              selectedTemplate.id !== oldSelectedTemplate.id) ||
            (selectedTemplate && !oldSelectedTemplate)
          )) {
        this.addSurveyDirective(selectedTemplate.id, selectedType.name, selectedTemplate.name);
      } else {
        this.removeSurveyDirective();
      }
    });
  }

  init() {
    this.selectedType = null;
    this.selectedTemplate = null;
    this.types = [];
    this.showTypes = false;
    this.surveyScope = null;
  }

  loadData() {
        return HomeService.getTypes()
        .then(types =>
              $timeout(() => {
                this.types = types;
            })
        )
        .catch(error => console.log(error));
  }

  toggleTypes() {
    this.showTypes = !this.showTypes;
    this.selectedType = this.selectedTemplate = null;
  }

  selectType(type) {
    this.selectedType = type;
    this.selectedTemplate = type.templates.length === 1 ? type.templates[0] : null;
    console.log(this.selectedType);
  }

  selectTemplate(template) {
    this.selectedTemplate = template;
    console.log({ selectTemplate: this.selectedTemplate });
  }

  addSurveyDirective(settingId, type, template) {
    console.log('Add Survey Directive');
    if (this.surveyScope) {
      this.surveyScope.$destroy();
    }
    // delete the survey directive inside placeholder
    const placeholder = angular.element('.new-survey-placeholder');
    if (placeholder) {
      console.log("Remove old survey directive");
      placeholder.empty();
      const strSurveyDirective = `<survey setting-id="${settingId}" type="${type}" template="${template}" ></survey>`;
      console.log(strSurveyDirective);
      placeholder.html(strSurveyDirective).show();
      this.surveyScope = $scope.$new(true);
      $compile(placeholder.contents())(this.surveyScope);
    }
  }

  removeSurveyDirective() {
    console.log('Remove Survey Directive');
    if (this.surveyScope) {
      this.surveyScope.$destroy();
    }
    // delete the survey directive inside placeholder
    const placeholder = angular.element('.new-survey-placeholder');
    if (placeholder) {
      placeholder.empty();
    }
  }
}
HomeController.$inject = ['$scope', 'HomeService', '$timeout', '$compile'];

export { HomeController };
