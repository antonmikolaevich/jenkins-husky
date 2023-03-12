const { When } = require('@wdio/cucumber-framework');
const { page } = require('../po');

When('I open {string} page', function (pageName) {
  return page(pageName).open();
});
