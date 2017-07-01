'use strict';

class AboutController {
  constructor() {
    this.name = 'Jane Doe';
    this.gender = 'Female';
    this.visible = true;
    this.buttonText = 'Hide Me!!!!';
    this.repo = 'https://github.com/railsstudent/webpack-angular-bootstrap-starter';
  }

  toggleVisible() {
    this.visible = !this.visible;
    if (this.visible) {
      this.buttonText = 'Hide Me!!!!';
    } else {
      this.buttonText = 'Show Me!!!!';
    }
  }
}

export { AboutController };
