describe("Module 3: WebdriverIO Introduction", () => {
  beforeEach(async () => {
    await browser.url("/showcase/angular/appointmentplanner/#/dashboard");
  });

  // it("test", async () => {
  //   const addNewDoctorButton = await $(
  //     ".specialization-types button.e-control"
  //   );
  //   const doctorCards = await $$(".e-cards.specialist-item");
  // });

  it("second test", async () => {
    const doctorsButton = await $("div[routerLink='/doctors']");
    const addNewDoctorButton = await $(
      ".specialization-types button.e-control"
    );
    const doctorNameInput = await $("#Name input");

    await doctorsButton.click();
    await addNewDoctorButton.click();
    await doctorNameInput.setValue("John Doe");
  });
});
