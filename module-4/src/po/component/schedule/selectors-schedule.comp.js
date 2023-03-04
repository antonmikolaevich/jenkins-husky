const BaseComponent = require("../common/base.comp");

class CalenderView extends BaseComponent{

        constructor() {
          super('.e-tbar-btn-text');
         
        }
    
        get closeBtn() {
          return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
        }
    
      
    
        /**
         * @param name {'Dropdown'| 'Navigation view port'}
         */
        input(name) {
          const selectors = {
            drop_down: "//span[@class='e-btn-icon e-icon-down-arrow e-icons e-icon-right']",
            nav_view_port: "//div[@id='_nav']",
            
          };
    
          return this.rootEl.$(selectors[name.toLowerCase()]);
        }
        
}





module.exports = CalenderView;