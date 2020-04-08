const ProductPage = function () {

    const until = protractor.ExpectedConditions;

    this.first_available_color = $$('.ColourImagesWrap li:not(greyOut)').first();
    this.first_available_size = $$('.sizeButtons li:not(greyOut)').first();
    this.add_to_bag_button = $('.addtoBagWrap .addToBag');
    this.bag_item_expanded = $('#divBagItems');
    this.bag_quantity = $('#bagQuantity');

    this.selectFirstAvailableColor = () => {
        browser.wait(until.visibilityOf(this.first_available_color), global.timeout, 'There is no color available.');
        this.first_available_color.click();
        expect(this.first_available_color.getAttribute('aria-checked')).toEqual('true');
    };

    this.selectFirstAvailableSize = () => {
        browser.wait(until.visibilityOf(this.first_available_size), global.timeout, 'There is no available size.');
        this.first_available_size.click();
        expect(this.first_available_size.getAttribute('class')).toContain('sizeVariantHighlight');
    };

    this.addToCart = () => {
        this.add_to_bag_button.click();
        browser.wait(until.visibilityOf(this.bag_item_expanded), global.timeout, 'Bag expanded view does not appear.');
    }

    this.getBagQuantity = async () => {
        const quantity = await this.bag_quantity.getText();
        return parseInt(quantity);
    }
};

module.exports = ProductPage;
