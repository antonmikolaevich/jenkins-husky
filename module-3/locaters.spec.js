const { page } = require('./po');

describe('Module 3: WebdriverIO Introduction', () => {
  beforeEach(async () => {
    await page('dashboard').open();
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('should show errors for Doctors', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.input('name_input').setValue('John Doe');
    await page('doctors').addDoctorModal.saveBtn.click();
    await expect(await page('doctors').addDoctorModal.input('email_error_property')).toBeDisplayed();
    await expect(await page('doctors').addDoctorModal.input('phone_error_property')).toBeDisplayed();
    await expect(await page('doctors').addDoctorModal.input('education_error_property')).toBeDisplayed();
  });

  it('should fill one Patient', async () => {
    await page('dashboard').sideMenu.item('patients').click();
    await page('patients').patientListHeader.addNewPatientBtn.click();
    await page('patients').addPatientModal.input('name_input').setValue('julia mormon');
    await page('patients').addPatientModal.input('phone').setValue('(111) 111-1111');
    await page('patients').addPatientModal.input('email').setValue('ab@mail.com');
    await expect(await page('patients').addPatientModal.input('save_btn')).toBeClickable();
    await page('patients').addPatientModal.input('save_btn').click();
  });

  it('should test navbar and dropdown of Schedule', async () => {
    await page('dashboard').sideMenu.item('schedule').click();
    await page('schedule').calenderView.input('drop_down').click();
    await expect(await page('schedule').calenderView.input('nav_view_port')).toBeDisplayedInViewport();
  });

  it('should check visisble Preferance', async () => {
    await page('dashboard').sideMenu.item('preference').click();
    await page('preference').preferanceView.input('first_day_of_week').click();
    await expect(await page('preference').preferanceView.input('first_day_of_week')).toBeClickable();
  });
});
