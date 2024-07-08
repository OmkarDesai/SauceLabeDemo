const { expect } = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
    }

    async verifyItemsInCart(expectedCount) {
        const cartItemsCount = await this.cartItems.count();
        expect(cartItemsCount).toBe(expectedCount);
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}

module.exports = CartPage;
