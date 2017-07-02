'use strict';
import _ from 'lodash';

class HomeService {
  constructor() {
    this.types = [
      { 'name': 'type 1',
        'templates': [
            { 'name': 'Template 1',
              'settings': {
                  'name': '',
                  'hobby': ''
              },
              'id' :'1'
            },
            { 'name': 'Template 2',
              'settings': {
                  'name': '',
                  'bloodType': '',
              },
              'id' :'2'
            },
            { 'name': 'Template 3',
              'settings': {
                  'name': '',
                  'gender': 'Female',
                  'favoriteColor': ''
              },
              'id' :'3'
            }
        ]
      },
      { 'name': 'type 2',
        'templates': [
            { 'name': 'Template 4',
              'settings': {
                  'name': '',
                  'nationality': ''
              },
              'id' :'4'
            }
        ]
      },
      { 'name': 'type 3',
        'templates': [
            { 'name': 'Template 5',
              'settings': {
                  'name': '',
                  'languages': '',
              },
              'id' :'5'
            }
        ]
      }
    ];
  }

  getTypes() {
    return new Promise(resolve => resolve(this.types));
  }

  getSettings(settingId, name) {
    const type = _.find(this.types, o => o.name === name);
    const template = _.find(type.templates, t => t.id === settingId);
    return new Promise(resolve => resolve(template.settings));
  }
}

export { HomeService };
