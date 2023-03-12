const BasePage = require('./base.page');
const { CalenderView } = require('../components');

class SchedulePage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/calendar');
    this.calenderView = new CalenderView();
  }
}

module.exports = SchedulePage;
