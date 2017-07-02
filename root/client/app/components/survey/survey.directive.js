import './survey.scss';
import template from './survey.html';
import { SurveyController as controller } from './survey.controller';

export const surveyDirective = ($compile, SurveyService) => {

  const compileTemplate = (scope, element, settingId, type) => {
    console.log(`compile template: settingId: ${settingId}, type: ${type}`);
    SurveyService.generateHtml(settingId, type).
    then (str => {
        const inputWrapper = element.find('#inputWrapper');
        inputWrapper.empty();
        inputWrapper.html(str).show();
        $compile(inputWrapper.contents())(scope);
        console.log(scope.surveyForm);
    });
  }

  return {
    template,
    controller,
    controllerAs: 'vm',
    bindToController: true,
    restrict: 'E',
    scope: {
      state: '@',
      settingId: '@',
      type: '@',
      template: '@'
    },
    replace: true,
    link: (scope, element, attrs) => {
      console.log(attrs);

      scope.settingId = attrs.settingId;
      scope.type = attrs.type;
      scope.template = attrs.template;

      scope.$watchCollection(() => [scope.vm.settingId, scope.vm.type], (n, o) => {
        const [ settingId = "", type = ""] = n;
        console.log("watcher fired");

        compileTemplate(scope, element, settingId, type);
        if (attrs.state === 'CREATE_SURVEY') {
          scope.vm.initNewSurveyModel();
        }
      });

      /*SurveyService.generateHtml(attrs.settingId, attrs.type).
      then (str => {
          const inputWrapper = element.find('#inputWrapper');
          inputWrapper.empty();
          inputWrapper.html(str).show();
          const fieldElement = $compile(inputWrapper.contents())(scope);
          console.log(fieldElement);
      });*/
    }
  };
};
surveyDirective.$inject = ['$compile', 'SurveyService'];
