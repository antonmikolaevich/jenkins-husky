const Header = require('./common/header.comp');
const AddDoctorModal = require('./doctors/add-doctors-modal.component');
const SideMenu = require('./common/side_menu.component');
const DoctorListHeader = require('./doctors/list_header.comp');
const AddPatientModal = require('./patients/add-patient-modal.comp');
const PatientListHeader = require('./patients/list_header_patient.comp');
const CalenderView = require('./schedule/locators-schedule.comp');
const PreferanceView = require('./preference/settings-preferance.comp');

module.exports = {
  Header,
  SideMenu,
  AddDoctorModal,
  DoctorListHeader,
  AddPatientModal,
  PatientListHeader,
  CalenderView,
  PreferanceView,
};
