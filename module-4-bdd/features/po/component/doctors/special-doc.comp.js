const BaseComponent = require('../common/base.comp');

class SpecialDoc extends BaseComponent {
  constructor() {
    super('.specialization-types');
  }

  /**
   * @param name {'name' | 'phone' | 'email' | 'education' | 'designation'}
   */
  input(name) {
    const selectors = {
      special_doc: '#Specialization > span',
      clicking_on_firstdoc: "//div[@id='Specialist_1']",
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
}

module.exports = SpecialDoc;
