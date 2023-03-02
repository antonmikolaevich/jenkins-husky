const BaseComponent = require("../common/base.comp");

class Settings extends BaseComponent{
    constructor() {
        super(".control-container");
      }

      
        /**
         * @param name {'Default' | 'First Day' }
         */
        item(name) {
          const selectors = {
            default_view: "(//span[@role='listbox'])[1]",
            first_day_of_month_dropdown: "'#FirstDayOfWeek')",
          };
    
          return this.rootEl.$(selectors[name.toLowerCase()]);
        }
        





}

module.exports = Settings;