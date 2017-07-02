'use strict';

let HomeService, $timeout, $scope;
class HomeController {

  constructor(_$scope, _HomeService, _$timeout) {

    HomeService = _HomeService;
    $timeout = _$timeout;
    $scope = _$scope;

    this.init();
    this.loadData();
  }

  init() {
    this.selectedType = null;
    this.selectedTemplate = null;
    this.types = [];
    this.showTypes = false;
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
  }

  selectType(type) {
    this.selectedType = type;
    this.selectedTemplate = type.templates.length === 1 ? type.templates[0] : null;
    console.log(this.selectedType);
  }

  selectTemplate(template) {
    this.selectedTemplate = template;
    console.log(this.selectedTemplate);
  }
}
HomeController.$inject = ['$scope', 'HomeService', '$timeout'];

export { HomeController };
