const BaseComponent = require('./base.comp');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  // get logoutBtn() {
  //   return this.rootEl.$('.logout-container');
  // }
}

module.exports = HeaderComponent;
