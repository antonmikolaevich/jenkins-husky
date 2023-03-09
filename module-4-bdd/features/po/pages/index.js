const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientPage = require('./patients.page');
const SchedulePage = require('./schedule.page');
const PreferanceViewPage = require('./preference.page')

/**
 * @param name {'dashboard' | 'doctors' | 'patients'|'schedule' | 'preference'}
 * @returns {DashboardPage|DoctorsPage|PatientPage|SchedulePage|PrefPage}
 */
function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientPage(),
    schedule: new SchedulePage(),
    preference: new PreferanceViewPage()
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientPage,
  SchedulePage,
  PreferanceViewPage,
  page,
};