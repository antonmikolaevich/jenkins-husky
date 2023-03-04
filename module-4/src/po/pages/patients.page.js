const BasePage = require('./base.page');
const {AddPatientModal, PatientListHeader, DetailPatientComponent} = require('../component')

class PatientPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/patients');
    this.addPatientModal = new AddPatientModal()
    this.patientListHeader = new PatientListHeader();
    this.detailPatientComponent = new DetailPatientComponent();
  }


}

module.exports = PatientPage;