const BaseComponent = require("../common/base.comp");

class CalenderView extends BaseComponent{

        constructor() {
          super('.e-tbar-btn-text');
        }
    
        get closeBtn() {
          return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
        }
    
      
    
        /**
         * @param name {'Today' | 'Dropdown' | 'waitlist' | 'education' | 'Navigation view port'}
         */
        input(name) {
          const selectors = {
            drop_down: "//span[@class='e-btn-icon e-icon-down-arrow e-icons e-icon-right']",
            wait_list: "(//div[@id='event-time'])[1]",
            nav_view_port: "//div[@id='_nav']"
          };
    
          return this.rootEl.$(selectors[name.toLowerCase()]);
        }
        
}


class MonthView extends BaseComponent{
    constructor() {
        super('.e-footer-container');
      }

      get showTodayBtn() {
        return this.rootEl.$("button[aria-label='Today']");
      }

}



module.exports = CalenderView,MonthView;