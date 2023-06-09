const BasePage = require('./base.page');
const { SideMenu } = require('../component');

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenu();
  }
}

module.exports = DashboardPage;
