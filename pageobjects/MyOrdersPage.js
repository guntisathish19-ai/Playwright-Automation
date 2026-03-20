import { expect } from "@playwright/test";

export class MyOrdersPage{
    constructor(page){
        this.page = page;
        this.myOrdersButton = page.locator("button[routerlink*='myorders']");
        this.myOrders = page.locator("tbody tr");
        this.orderIdDetailsElement = page.locator(".col-text");
    }

    async verifyMyOrders(orderId){
        await this.myOrdersButton.click();
        //await page.locator("tbody").waitFor();
        const rows = await this.myOrders;
 
 
        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const orderIdDetails = await this.orderIdDetailsElement.textContent();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
    }
}