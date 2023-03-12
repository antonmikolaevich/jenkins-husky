const { Given, When, Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');

Given('I open {string} page', function (pageName) {
  return page(pageName).open();
});

When('I click {string} link from the side menu', function (link) {
  return page('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function () {
  return page('doctors').doctorListHeader.addNewDoctorBtn.click();
});

When('I click {string} button in modal window', function (button) {
  return page('doctors').addDoctorModal.clickButton(button);
});

When(/^I click add new patient button from list header$/, function () {
  return page('patients').patientListHeader.addNewPatientBtn.click();
});

When(/^I set value patients name$/, function () {
  return page('patients').addPatientModal.input('name_input').setValue('Jhone');
});

When(/^I set value for patients phone$/, function () {
  return page('patients').addPatientModal.input('phone').setValue('(111) 111-1111');
});

When(/^I set value for patients email$/, function () {
  return page('patients').addPatientModal.input('email').setValue('ab@mail.com');
});

When('I click {string} button in modal window', function (button) {
  return page('patients').addPatientModal.clickButton(button);
});

When(/^I click on save button$/, function () {
  return page('patients').addPatientModal.input('save_btn').click();
});

When(/^I click on todays calender view$/, function () {
  return page('schedule').calenderView.input('drop_down').click();
});

When(/^I make sure calender is visible on the viewport$/, function () {
  return expect(page('schedule').calenderView.input('nav_view_port')).toBeDisplayedInViewport();
});

When(/^I click on first day of the week$/, function () {
  return page('preference').preferanceView.input('first_day_of_week').click();
});

When(/^I make sure first day of the week is clickable$/, function () {
  return expect(page('preference').preferanceView.input('first_day_of_week')).toBeClickable();
});
