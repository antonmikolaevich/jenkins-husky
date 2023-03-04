const BasePage = require('./base.page');
const { AddDoctorModal, DoctorListHeader, SpecialDoc, RandomDaySpecialDoc} = require('../component');

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.addDoctorModal = new AddDoctorModal();
    this.doctorListHeader = new DoctorListHeader();
    this.specialDoc = new SpecialDoc();
    this.randomDay = new RandomDaySpecialDoc();
  }


}

module.exports = DoctorsPage;