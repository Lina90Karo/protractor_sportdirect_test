const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const env_url_prod = "https://pl.sportsdirect.com";

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/sportsdirect_spec.js'],

    onPrepare: function () {
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
        global.timeout = 5000;
        global.environment_url = env_url_prod;

        jasmine.getEnv().addReporter(
            new SpecReporter({
                // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
                // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
                suite: {
                    displayNumber: true, // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: true, // display each pending spec
                    displayDuration: true, // display each spec duration
                    displayStacktrace: true
                },
                summary: {
                    displaySuccesses: true, // display summary of all successes after execution
                    displayFailed: true, // display summary of all failures after execution
                    displayPending: false, // display summary of all pending specs after execution
                },
            })
        );
    },

};