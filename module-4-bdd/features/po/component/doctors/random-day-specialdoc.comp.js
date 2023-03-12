const BaseComponent = require('../common/base.comp');

class RandomDaySpecialDoc extends BaseComponent {
  constructor() {
    super('.work-days-container');
  }

  /**
   * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
   */
  input(name) {
    const selectors = {
      random_day: "//div[@class='RemoveBreak day-break-hours']",
      nuerology_check: "//li[@id='d0af-1']//div[@class='specialist-value']",
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = RandomDaySpecialDoc;
