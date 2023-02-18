// all the scenario used in mod 3 wth basic commands and new scenraio 5 is created with custom click

describe('Module 4 using all the basic commands',()=>{

    beforeEach(async () => {
        await browser.url('/showcase/angular/appointmentplanner/#/doctors');
      });


      it('should run scenario one - Doctors tab - with some basic commands', async () => {

        //$ is used
        const doctorsButton = await $("div[routerLink='/doctors']");
        const addNewDoctorButton = await $('.specialization-types button.e-control');
        const doctorNameInput = await $('#Name input');
        const saveButton = await $('//button[text()="Save"]');
        const mailError = await $('label#Email-info');
        const mobileError = await $('label#undefined-info');
        const specialDoc = await $$('#Specialization > span');
        expect(await specialDoc).toBeDisplayedInViewport();

        //click is used
        await doctorsButton.click();
        await addNewDoctorButton.click();

        //setValue
        await doctorNameInput.setValue('John Doe');

        //addValue
        await doctorNameInput.addValue('Demo');
        
        await saveButton.click();

        const savedValueExists = await $('#Specialist_8');
        savedValueExists.isExisting()
        expect(await mailError.getText()).toEqual('Enter valid email');

        //waitForDisplayed
        await mailError.waitForDisplayed({ timeout: 3000 });
        await expect(mailError).toBeDisplayed();
        
        expect(await mobileError.getText()).toEqual('Enter valid mobile number');
        await expect(mobileError).toBeDisplayed();
  
        const educationError = await $('//*[@id="Education-info"]');
        expect(await educationError.getText()).toEqual('Enter valid education');

        await expect(educationError).toBeDisplayed();
      

        const clickingOnFirstDoc = await $("//div[@id='Specialist_1']")
        clickingOnFirstDoc.click();

        const randomDay = await $("//div[@class='RemoveBreak day-break-hours']")
        // isExisting is used
        await randomDay.isExisting()


        // waitForExist
 
       const nuerologyCheck = await $("//li[@id='d0af-1']//div[@class='specialist-value']")
       nuerologyCheck.waitForExist({timeout:2000})

      });
    
      it('should run scenario two - Patients with some basic commands', async () => {

        const patients = await $('div.sidebar-item.patients');
        const addNewPatientButton = await $('#patient-wrapper > div > div.patient-operations > button');
        const patientName = await $('#Name input');
        const mobileNumber = await $('#PatientMobile');
        const mailID = await $('#Email input');
        const saveBtn = await $('//div[2]/ejs-dialog/div[3]/div/button[2]');
        const saveBtnClickCheck = await $('//div[2]/ejs-dialog/div[3]/div/button[2]');
        const listViewPatient = await $('div.patients-detail-wrapper');
        await patients.click();
        await addNewPatientButton.click();

        await patientName.setValue('julia mormon');
        await patientName.addValue('Junior');
        await mobileNumber.setValue('(111) 111-1111');
        await mailID.setValue('ab@mail.com');
 
    
        await expect(saveBtnClickCheck).toBeClickable();
    
     
        await saveBtn.click();
    
        //waitForDisplayed
        await listViewPatient.waitForDisplayed({ timeout: 3000 });
        await expect(listViewPatient).toBeDisplayed();
      });
    
      it('should run scenario three - Schedule with some basic commands', async () => {

        

         // $ is used
        const schedule = await $('div.sidebar-item.calendar');
        const showToday = await $("button[aria-label='Today']");
        const dropDown = await $("//span[@class='e-btn-icon e-icon-down-arrow e-icons e-icon-right']");
        const waitList = await $("(//div[@id='event-time'])[1]");
        const navViewPort = await $("//div[@id='_nav']");
    
       // click is used
        await schedule.click();
    
     
        dropDown.click();
 
        showToday.click();
    
    
        await expect(waitList).toHaveId('event-time');
        
        //waitForDisplayed
        await navViewPort.waitForDisplayed({ timeout: 3000 });
        await expect(navViewPort).toBeDisplayedInViewport();
      });
    
      it('should run scenario four - Preferance with custom click commands', async () => {

      
        const preferance = await $('div.sidebar-item.preference');
    
 
        await preferance.click();
    
     
        const defaultView = await $("(//span[@role='listbox'])[1]");


        await defaultView.waitForDisplayed({ timeout: 3000 });
        await expect(defaultView).toBeDisplayed();
  
        
        const firstDayOfMonthDropDown = await $('#FirstDayOfWeek');
        await expect(firstDayOfMonthDropDown).toBeClickable();
      });
    

      it.only('should run scenario Five - Dashboard', async () => {


        browser.addCommand("waitAndClick", async function () {
            // `this` is return value of $(selector)
            await this.waitForDisplayed()
            await this.click()
        }, true)


        const viewAllDoc = await $("//a[@routerlink='/doctors']");

        //customClick
        viewAllDoc.waitAndClick();

      });

})
