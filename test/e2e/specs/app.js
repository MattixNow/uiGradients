// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'App load test': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header')
      .assert.elementPresent('.actionbar')
      .assert.elementPresent('.display')
      .assert.elementPresent('.nav')
      .end();
  },

  'Gradient navigation test': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(`${devServer}/#Cherry`)
      .waitForElementVisible('#app', 5000)
      .pause(3000) // wait for preloader to fade
      .assert.containsText('.display__gradientname p', 'Cherry')
      .click('#nav--next')
      .assert.containsText('.display__gradientname p', 'Pinky')
      .click('#nav--prev')
      .click('#nav--prev')
      .assert.containsText('.display__gradientname p', 'Mojito')
      .end();
  },
};
