class InventoryPage {
    constructor(page) {
        this.page = page;
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async addRandomItemsToCart(count = 3) {
        for (let i = 1; i <= count; i++) {
            await this.page.locator(`(//button[contains(@id , 'add-to-cart')])[${i}]`).click();
        }
    }
    
    async goToCart() {
        await this.cartButton.click();
    }
}

module.exports = InventoryPage;
