const MainPage = function () {

    const until = protractor.ExpectedConditions;

    this.advertisment = $('#advertPopup');
    this.advertisment_close_button = $('#advertPopup button.close');
    this.carousel_elements = $$('#carousel-example-generic2 span.imageTitle');
    this.search_input = $('#txtSearch');

    this.openPage = async () => {
        browser.get(global.environment_url);
        const page_title = await browser.getTitle();
        expect(page_title).toEqual(`SportsDirect.com - The UK's No 1 Sporty Retailer`);
    };

    this.handleAdvertWrapper = async () => {
        if (await this.advertisment.isDisplayed()) {
            this.advertisment_close_button.click();
            browser.actions()
                .mouseMove({x: 0, y: 0}) 
                .perform(); // move mouse away to not trigger hover on the menu
        }
    };

    this.getLastProductName = () => {
        /*
         seems that protractor + selenium can only obtain text from currently visible elements while using ElementArrayFinder
         so here I've filtered it through to make sure we aren't getting an empty string
        */
        return this.carousel_elements.filter((elem) => {
                return elem.getText().then(function (text) {
                    return text !== '';
                });
            })
            .last()
            .getText();
    };

    this.findProduct = (item_name) => {
        browser.wait(until.visibilityOf(this.search_input), global.timeout, 'Search input is not visible');
        this.search_input.clear();
        this.search_input.click();
        this.search_input.sendKeys(item_name);
        this.search_input.sendKeys(protractor.Key.ENTER);
    };

};

module.exports = MainPage;
