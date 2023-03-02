const { page } = require('./po');

describe('Module 3: WebdriverIO Introduction', () => {
  beforeEach(async () => {
    await page('dashboard').open()
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });


  it('should run scenario one - Doctors', async () => {
    await page('dashboard').sideMenu.item('doctors').click();
    await page('doctors').doctorListHeader.addNewDoctorBtn.click();
    await page('doctors').addDoctorModal.input('name_input').setValue('John Doe');
    await page('doctors').addDoctorModal.saveBtn.click();
    await expect(await page('doctors').addDoctorModal.input('email_error_property')).toBeDisplayed();
    await expect(await page('doctors').addDoctorModal.input('phone_error_property')).toBeDisplayed();
    await expect(await page('doctors').addDoctorModal.input('education_error_property')).toBeDisplayed();

  });

  it('should run scenario two - Patients', async () => { 
    await page('dashboard').sideMenu.item('patients').click();
    await page('patients').patientListHeader.addNewPatientBtn.click();
    await page('patients').addPatientModal.input('name_input').setValue('julia mormon');
    await page('patients').addPatientModal.input('phone').setValue('(111) 111-1111');
    await page('patients').addPatientModal.input('email').setValue('ab@mail.com');
    await expect(await page('patients').addPatientModal.input('save_btn')).toBeClickable();
    await page('patients').addPatientModal.input('save_btn').click();
  
  });

  it('should run scenario three - Schedule', async () => {
    await page('dashboard').sideMenu.item('schedule').click();
    // await page('schedule').calenderView.input('drop_down').click();
    // await page('schedule').calenderView.input('show_today').click();
    // const schedule = await $('div.sidebar-item.calendar');
    // await page('schedule').monthView.showTodayBtn.click();

    const showToday = await $("button[aria-label='Today']");
    const dropDown = await $("//span[@class='e-btn-icon e-icon-down-arrow e-icons e-icon-right']");
    const waitList = await $("(//div[@id='event-time'])[1]");
    const navViewPort = await $("//div[@id='_nav']");

    // await schedule.click();

    // xpath
    dropDown.click();

    // css
    showToday.click();

    // assertion to check if waiting list event time has an ID
    await expect(waitList).toHaveId('event-time');

    // assertion to check navigation bar is visible in view port
    await expect(navViewPort).toBeDisplayedInViewport();
  });

  it('should run scenario four - Preferance', async () => {
  
    await page('dashboard').sideMenu.item('preference').click();
   

    // assertion to check if week is visible
    const defaultView = await $("(//span[@role='listbox'])[1]");
    await expect(defaultView).toBeDisplayed();

    // first of the month should be Monday
    const firstDayOfMonthDropDown = await $('#FirstDayOfWeek');
    await expect(firstDayOfMonthDropDown).toBeClickable();
  });
});
