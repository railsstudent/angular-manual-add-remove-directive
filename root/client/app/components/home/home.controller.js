'use strict';

//const SERVICE = new WeakMap();

let HomeService, $timeout, $scope;
class HomeController {

  constructor(_$scope, _HomeService, _$timeout) {

    HomeService = _HomeService;
    $timeout = _$timeout;
    $scope = _$scope;

    this.init();
    //this.loadData();
  }

  init() {
    this.technologies = [];
    this.loaders = [];
    this.selectedType = null;
    this.selectedTemplate = null;
    this.types = [
      { "name": "type 1",
        "templates": [
            { "name": "Template 1",
              "settings": {
                  "name": "",
                  "hobby": "Coding"
              }
            },
            { "name": "Template 2",
              "settings": {
                  "name": "",
                  "bloodType": "O Plus",
                  "sign": "",
                  "weight": ""
              }
            },
            { "name": "Template 3",
              "settings": {
                  "name": "",
                  "gender": "Female",
                  "favoriteColor": "Purple"
              }
            }
        ]
      },
      { "name": "type 2",
        "templates": [
            { "name": "Template 4",
              "settings": {
                  "name": "",
                  "nationality": "",
                  "height": ""
              }
            },
        ]
      },
      { "name": "type 3",
        "templates": [
            { "name": "Template 5",
              "settings": {
                  "name": "",
                  "languages": "",
              }
          },
        ]
      }
    ];
    this.showTypes = false;
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
