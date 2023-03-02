const BasePage = require('./base.page');
const {CalenderView, MonthView} = require('../components')

class SchedulePage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/calendar');
    this.calenderView = new CalenderView()
    this.monthView = new MonthView()

  }


}

module.exports = SchedulePage;