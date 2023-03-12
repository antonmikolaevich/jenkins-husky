const BaseComponent = require('../common/base.comp');

class ListHeaderComponentPatient extends BaseComponent {
  constructor() {
    super('.patient-operations');
  }

  get addNewPatientBtn() {
    return this.rootEl.$('button.e-control');
  }
}

module.exports = ListHeaderComponentPatient;
