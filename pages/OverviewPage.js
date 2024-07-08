const { expect } = require('@playwright/test');

class OverviewPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.finishButton = page.locator('#finish');
    }

    async verifyItemsInCart(expectedCount) {
        const cartItemsCount = await this.cartItems.count();
        expect(cartItemsCount).toBe(expectedCount);
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

module.exports = OverviewPage;
