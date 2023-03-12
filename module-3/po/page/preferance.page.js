const BasePage = require('./base.page');
const { PreferanceView } = require('../components');

class PreferanceViewPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/preference');
    this.preferanceView = new PreferanceView();
  }
}

module.exports = PreferanceViewPage;
