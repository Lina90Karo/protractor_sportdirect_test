const SearchResultsPage = function () {

    const until = protractor.ExpectedConditions;

    this.product_list = $('#productlistcontainer');
    this.first_product = $$('#productlistcontainer li a').first();
    this.product_content = $('#mainDetails');
    this.no_result = $('[id$=_NoSearchResults]');

    this.openFirstProduct = () => {
        browser.wait(until.visibilityOf(this.first_product), global.timeout, "The first product is not visible.");
        this.first_product.click();
        browser.wait(until.visibilityOf(this.product_content), global.timeout, "The product details are not visible.");
    };

    this.checkIfSearchedProductExist = async (item_name) => {
        if (await this.product_list.isPresent() && await this.first_product.isDisplayed()) {
            this.openFirstProduct();
            return;
        }
        if (await this.no_result.isDisplayed()) {
            return console.log(`Product '${await item_name}' not found.`);
        }
    };
};

module.exports = SearchResultsPage;
