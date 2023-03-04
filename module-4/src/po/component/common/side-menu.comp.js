const BaseComponent = require('./base.comp')

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }

  get name() {
    return this.rootEl.$('p.name');
  }

  /**
   * @param name {'dashboard' | 'schedule' | 'doctors' | 'patient'}
   */
  
  item(name) {
    const selectors = {
      dashboard: '[routerlink="/dashboard"]',
      schedule: '[routerlink="/calendar"]',
      doctors: '[routerlink="/doctors"]',
      patients: '[routerlink="/patients"]',
      preference: '[routerlink="/preference"]'
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SideMenuComponent;