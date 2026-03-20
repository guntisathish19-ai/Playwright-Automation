const { test, expect } = require('@playwright/test')
const { poManager, POManager } = require('../pageobjects/POManager');
const {customtest} = require('../utils/test-base')
const dataset = JSON.parse(JSON.stringify(require('../utils/placeOrderTestData.json')));

for (const data of dataset) {
   test(`@We Client app login for ${data.productName}`, async ({ page }) => {

      const poManager = new POManager(page);

      const loginpage = poManager.getLoginPage();
      await loginpage.goto();
      await loginpage.validLogin(data.userName, data.passWord);

      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProductAddCart(data.productName);
      await dashboardPage.navigateToCart();

      const checkoutPage = poManager.getCheckoutPage();
      await checkoutPage.verifyAddedProduct(data.productName);
      await checkoutPage.performCheckout(data.userName);
      const orderId = await checkoutPage.placeOrder();

      const myOrdersPage = poManager.getMyOrderPage();
      myOrdersPage.verifyMyOrders(orderId);

   });
}

customtest.only(`@We Client app login for`, async ({ page, testData }) => {

      const poManager = new POManager(page);

      const loginpage = poManager.getLoginPage();
      await loginpage.goto();
      await loginpage.validLogin(testData.userName, testData.passWord);

      const dashboardPage = poManager.getDashboardPage();
      await dashboardPage.searchProductAddCart(testData.productName);
      await dashboardPage.navigateToCart();

      const checkoutPage = poManager.getCheckoutPage();
      await checkoutPage.verifyAddedProduct(testData.productName);
      await checkoutPage.performCheckout(testData.userName);
      const orderId = await checkoutPage.placeOrder();

      const myOrdersPage = poManager.getMyOrderPage();
      myOrdersPage.verifyMyOrders(orderId);

   });