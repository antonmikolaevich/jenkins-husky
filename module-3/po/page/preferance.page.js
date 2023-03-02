const BasePage = require('./base.page');
const { Settings } = require('../components');


class PrefPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/preference');
    this.settings = new Settings();
  }
}

module.exports = PrefPage;
