const DashboardPage = require('./dashboard.page');
const DoctorsPage = require('./doctors.page');
const PatientPage = require('./patient.page');
const SchedulePage = require('./schedule.page');
const PrefPage = require('./preferance.page')

/**
 * @param name {'dashboard' | 'doctors' | 'patients'|'schedule' | 'prefence'}
 * @returns {DashboardPage|DoctorsPage|PatientPage|SchedulePage|PrefPage}
 */
function page(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientPage(),
    schedule: new SchedulePage(),
    preference: new PrefPage()
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientPage,
  SchedulePage,
  PrefPage,
  page,
};
