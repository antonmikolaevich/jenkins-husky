const BaseComponent = require('../common/base.comp');

  class DetailPatientComponent extends BaseComponent {
    constructor() {
      super('.patients-detail-wrapper');
    }


    /**
     * @param name {'name' | 'phone' | 'email' | 'education' | 'list view'}
     */
    input(name) {
      const selectors = {
        listview_patient: "td[aria-label='8 column header ID']",
      };

      return this.rootEl.$(selectors[name.toLowerCase()]);
    }

  
    


}

module.exports = DetailPatientComponent;