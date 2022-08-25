/* eslint-disable import/no-extraneous-dependencies */
const { Then } = require("@wdio/cucumber-framework");
const compareText = require("./utils/compare-text");

Then(
  "Page title should {string} {string}",
  async function (shouldBeParam, titleText) {
    const pageTitle = await browser.getTitle();
    return compareText(pageTitle, titleText, shouldBeParam);
  }
);

// Then(/^Page title should "(:not )? (conatin|be equal to)" "(.*)"$/, function(notArg, shouldBeParam, titleText) {
//   const compareParameter = `${notArg}${shouldBeParam}`;
//   const pageTitle = await browser.getTitle();
//   return compareText(pageTitle, titleText, shouldBeParam, compareParameter);
// });
