const BaseComponent = require('../common/base.comp');

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  get closeBtn() {
    return this.rootEl.$('.button-container button.e-btn:not(.e-primary)');
  }

  get saveBtn() {
    return this.rootEl.$('.button-container button.e-primary');
  }

  /**
   * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
   */
  input(name) {
    const selectors = {
      name_input: '#Name input',
      phone_error_property: 'input#DoctorMobile',
      email_error_property: 'input[name="Email"]',
      education_error_property: 'input[name="Education"]',
    };

    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = AddDoctorComponent;
