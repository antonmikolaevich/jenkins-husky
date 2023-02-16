describe('Module 3: WebdriverIO Introduction', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');

    await expect(browser).toHaveUrlContaining('appointmentplanner');
  });

  // AC2: four scenario
  // AC3: XPath and CSS Selectors are used
  // AC4: Different assertions are used

  it('should run scenario one - Doctors', async () => {
    const doctorsButton = await $("div[routerLink='/doctors']");
    const addNewDoctorButton = await $('.specialization-types button.e-control');
    const doctorNameInput = await $('#Name input');
    const saveButton = await $('//button[text()="Save"]');
    const mailError = await $('label#Email-info');
    const mobileError = await $('label#undefined-info');

    await doctorsButton.click();
    await addNewDoctorButton.click();
    await doctorNameInput.setValue('John Doe');
    await saveButton.click();

    // css and assertion
    expect(await mailError.getText()).toEqual('Enter valid email');
    await expect(mailError).toBeDisplayed();

    expect(await mobileError.getText()).toEqual('Enter valid mobile number');
    await expect(mobileError).toBeDisplayed();

    // using xpath locator
    const educationError = await $('//*[@id="Education-info"]');

    // assertions checks text

    expect(await educationError.getText()).toEqual('Enter valid education');

    // assertions checks display of error is present

    await expect(educationError).toBeDisplayed();
  });

  it('should run scenario two - Patients', async () => {
    const patients = await $('div.sidebar-item.patients');
    const addNewPatientButton = await $('#patient-wrapper > div > div.patient-operations > button');
    const patientName = await $('#Name input');
    const mobileNumber = await $('#PatientMobile');
    const mailID = await $('#Email input');
    const saveBtn = await $('//div[2]/ejs-dialog/div[3]/div/button[2]');
    const saveBtnClickCheck = await $('//div[2]/ejs-dialog/div[3]/div/button[2]');
    const listViewPatient = await $('div.patients-detail-wrapper');

    // css
    await patients.click();
    await addNewPatientButton.click();
    await patientName.setValue('julia mormon');
    await mobileNumber.setValue('(111) 111-1111');
    await mailID.setValue('ab@mail.com');

    // assertion checks if save button is clickable

    await expect(saveBtnClickCheck).toBeClickable();

    // xpath
    await saveBtn.click();

    // assertion checks if user is added after saving

    await expect(listViewPatient).toBeDisplayed();
  });

  it('should run scenario three - Schedule', async () => {
    const schedule = await $('div.sidebar-item.calendar');
    const showToday = await $("button[aria-label='Today']");
    const dropDown = await $("//span[@class='e-btn-icon e-icon-down-arrow e-icons e-icon-right']");
    const waitList = await $("(//div[@id='event-time'])[1]");
    const navViewPort = await $("//div[@id='_nav']");

    await schedule.click();

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
    const preferance = await $('div.sidebar-item.preference');

    // css
    await preferance.click();

    // xpath just for demo, will select week
    await $$("(//span[@role='listbox'])[1]");

    //   const firstDayofWeek = await $("(//div[normalize-space()='First Day of the Week'])")
    // await expect(firstDayofWeek).toBeChecked()
  });
});
