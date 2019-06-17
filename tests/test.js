module.exports = {
  'assert welcome' : function (browser) {
    browser
      .waitForElementPresent('.test-welcome-form')
      .end();
  }
};