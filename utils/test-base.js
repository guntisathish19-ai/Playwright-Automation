const base = require('@playwright/test');

exports.customtest = base.test.extend({
    testData: {
        userName : "testmail2026@gmail.com",
        passWord : "Test@123",
        productName : "ADIDAS ORIGINAL"
    }
})
