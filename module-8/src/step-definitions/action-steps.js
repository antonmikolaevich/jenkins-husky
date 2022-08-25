/* eslint-disable import/no-extraneous-dependencies */
const { When } = require("@wdio/cucumber-framework");
const { page } = require("../po");

When("I open {string} page", function (pageName) {
  return page(pageName).open();
});

// When(/^I open "(.*)" page$/, function(pageName) {
//   return page(pageName).open();
// });

When("I wait {int} seconds", function (timeToWaitInSeconds) {
  return browser.pause(timeToWaitInSeconds * 1000);
});

// When(/^I wait (\d+) seconds$/, function(timeToWaitInSeconds) {
//   return browser.pause(timeToWaitInSeconds * 1000);
// });
