const Header = require('../components/common/header.comp');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  open() {
    return browser.url(this.url);
  }
}

module.exports = BasePage;
