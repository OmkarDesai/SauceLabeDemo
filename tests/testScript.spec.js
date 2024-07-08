const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const OverviewPage = require('../pages/OverviewPage');

test('Complete checkout process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const overviewPage = new OverviewPage(page);
    await page.goto('https://www.saucedemo.com/');

    // Login
    await loginPage.verifyLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.verifyLoginSuccess();

    // Add random items to cart
    await inventoryPage.addRandomItemsToCart(3);

    // Go to cart and verify items
    await inventoryPage.goToCart();
    await cartPage.verifyItemsInCart(3);

    // Proceed to checkout
    await cartPage.checkout();

     // Fill in checkout information
     await checkoutPage.fillInformation('Omkar', 'Desai', '12345');

     // Verify items in overview and finish
    await overviewPage.verifyItemsInCart(3);
    await overviewPage.finishCheckout();
});