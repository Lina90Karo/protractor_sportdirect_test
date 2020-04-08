# Sportsdirect basic test using Protractor


### Test files location

Main test file is located in [tests/sportsdirect_spec.js](https://github.com/Lina90Karo/protractor_sportdirect_test/blob/master/tests/sportsdirect_spec.js)

Page objects are located in the [pages](https://github.com/Lina90Karo/protractor_sportdirect_test/blob/master/pages/) directory
 

### Usage

Clone this repo and install Protractor with reporter dependency via 

    npm install

Protractor needs Selenium server to be running, should be installed automatically after `npm install`, if not - use 

    node_modules/protractor/bin/webdriver-manager update

Then run the server via

    npm run before-test

Finally, run Protractor test suite with

    npm test