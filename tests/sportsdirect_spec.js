const MainPage = require('../pages/main_page.js');
const SearchResultsPage = require('../pages/search_results_page.js');
const ProductPage = require('../pages/product_page.js');

describe(`Search and add a product to the cart on 'Sportsdirect' page`, function () {
    const mainPage = new MainPage();
    const searchPage = new SearchResultsPage();
    const productPage = new ProductPage();

    let item_name;

    beforeEach(function () {
        mainPage.openPage();
        mainPage.handleAdvertWrapper();
    });

    it(`Searches for the last visible item name we obtained from the carousel and clicks on the result if exist`, function () {
        item_name = mainPage.getLastProductName();
        mainPage.findProduct(item_name);
        searchPage.checkIfSearchedProductExist(item_name);
    });

    it(`Searches for the 'Runfalcon' keyword, opens the first result,
        selects first available color and size and adds to the cart`, function () {
        expect(productPage.getBagQuantity()).toEqual(0);
        mainPage.findProduct('Runfalcon');
        searchPage.checkIfSearchedProductExist(item_name);
        productPage.selectFirstAvailableColor();
        productPage.selectFirstAvailableSize();
        productPage.addToCart();
        expect(productPage.getBagQuantity()).toBeGreaterThan(0);
    });

});
