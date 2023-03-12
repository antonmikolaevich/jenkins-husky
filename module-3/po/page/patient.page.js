const BasePage = require('./base.page');
const { AddPatientModal, PatientListHeader } = require('../components');

class PatientPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/patients');
    this.addPatientModal = new AddPatientModal();
    this.patientListHeader = new PatientListHeader();
  }
}

module.exports = PatientPage;
