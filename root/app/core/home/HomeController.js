'use strict';

//const SERVICE = new WeakMap();

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
    this.technologies = [];
    this.loaders = [];
  }

  loadData() {
        return Promise.all([ HomeService.getTechnologies(), HomeService.getLoaders() ])
        .then(vals =>
              $timeout(() => {
                this.technologies = vals[0];
                this.loaders = vals[1];
            })
        )
        .catch(error => console.log(error));
  }
}
HomeController.$inject = ['$scope', 'HomeService', '$timeout'];

export { HomeController };
