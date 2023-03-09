const BaseComponent = require('../common/base.comp');

  class PreferanceView extends BaseComponent {
    constructor() {
      super("div.title")
    }

    input(name) {
      const selectors = {
        first_day_of_week: "(//span[@role='listbox'])[6]",
      };

      return this.rootEl.$(selectors[name.toLowerCase()]);
    }


}

module.exports = PreferanceView;