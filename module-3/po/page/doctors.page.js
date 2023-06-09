const BasePage = require('./base.page');
const { AddDoctorModal, DoctorListHeader } = require('../components');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorModal = new AddDoctorModal();
    this.doctorListHeader = new DoctorListHeader();
  }
}

module.exports = DoctorsPage;
