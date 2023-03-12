const { page } = require('../po');

describe('Module 4 using all the basic commands', () => {
  beforeEach(async () => {
    await page('dashboard').open();
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('should run scenario one - Doctors tab - with some basic commands', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await expect(await page('doctors').specialDoc.input('special_doc')).toBeDisplayed();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.input('name_input').setValue('John Doe');
    await page('doctors').addDoctorModal.saveBtn.click();
    await expect(await page('doctors').addDoctorModal.input('email_error_property')).toBeDisplayed();
    await expect(await page('doctors').addDoctorModal.input('phone_error_property')).toBeDisplayed();
    await expect(await page('doctors').addDoctorModal.input('education_error_property')).toBeDisplayed();
    await page('doctors').addDoctorModal.closeBtn.click();
    await page('doctors').specialDoc.input('clicking_on_firstdoc').click();
    await page('doctors').randomDay.input('random_day').isExisting();
  });

  it('should run scenario two - Patients with some basic commands', async () => {
    await page('dashboard').sideMenu.item('patients').click();
    await page('patients').patientListHeader.addNewPatientBtn.click();
    await page('patients').addPatientModal.input('name_input').setValue('julia mormon');
    await page('patients').addPatientModal.input('phone').setValue('(111) 111-1111');
    await page('patients').addPatientModal.input('email').setValue('ab@mail.com');
    await expect(await page('patients').addPatientModal.input('save_btn')).toBeClickable();
    await page('patients').addPatientModal.input('save_btn').click();
    await page('patients').detailPatientComponent.input('listview_patient');
    await page('patients').detailPatientComponent.input('listview_patient').waitForDisplayed({ timeout: 3000 });
    await expect(await page('patients').detailPatientComponent.input('listview_patient')).toBeDisplayed();
  });

  it('should run scenario three - Schedule with some basic commands', async () => {
    await page('dashboard').sideMenu.item('schedule').click();
    await page('schedule').calenderView.input('drop_down').click();
    await expect(await page('schedule').calenderView.input('nav_view_port')).toBeDisplayedInViewport();
  });

  it('should run scenario four - Preferance with custom click commands', async () => {
    await page('dashboard').sideMenu.item('preference').click();
    await page('preference').preferanceView.input('first_day_of_week').click();
    await expect(await page('preference').preferanceView.input('first_day_of_week')).toBeClickable();
  });

  it('should run scenario Five - Dashboard', async () => {
    // custom click
    browser.addCommand(
      'waitAndClick',
      async function () {
        await this.waitForDisplayed();
        await this.click();
      },
      true,
    );

    await page('dashboard').sideMenu.item('doctors').waitAndClick();
  });
});
