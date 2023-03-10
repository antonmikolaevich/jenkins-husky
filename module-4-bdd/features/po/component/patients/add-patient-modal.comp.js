const BaseComponent = require('../common/base.comp');

  class AddPatientComponent extends BaseComponent {
    constructor() {
      super('.new-patient-dialog');
    }

    get closeBtn() {
      return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
    }

    get saveBtn() {
      return this.rootEl.$('.button-container button.e-primary');
    }
    
       /**
   * @param button {'save' | 'close'}
   */
   async clickButton(button) {
    if (button.toLocaleLowerCase() === 'save') {
      await this.saveBtn.click();
    } else {
      await this.closeBtn.click();
    }
  }

    /**
     * @param name {'name' | 'phone' | 'email' | 'education' | 'list view'}
     */
    input(name) {
      const selectors = {
        name_input: '#Name input',
        phone: '#PatientMobile',
        email: '#Email input',
        save_btn: '//div[2]/ejs-dialog/div[3]/div/button[2]'
      };

      return this.rootEl.$(selectors[name.toLowerCase()]);
    }


}

module.exports = AddPatientComponent;