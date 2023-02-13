describe('Module 3: WebdriverIO Introduction', () => {
  beforeEach(async () => {
    await browser.url('/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('first test', async () => {
    const doctorsButton = await $("div[routerLink='/doctors']");
    const addNewDoctorButton = await $('.specialization-types button.e-control');
    const doctorNameInput = await $('#Name input');

    await doctorsButton.click();
    await addNewDoctorButton.click();
    await doctorNameInput.setValue('John Doe');
  });
});
