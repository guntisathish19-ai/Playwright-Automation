import { expect } from "@playwright/test";

export class CheckoutPage{
    constructor(page){
        this.page = page
       // this.cart = page.locator("div li");
        this.checkout = page.locator("text=Checkout");
        this.country = page.getByPlaceholder('Select Country');
        this.dropdown = page.locator(".ta-results");
        this.user = page.locator(".user__name [type='text']");
        this.submit = page.locator(".action__submit");
        this.orderMessage = page.locator(".hero-primary");
        this.readiOrderId = page.locator(".em-spacer-1 .ng-star-inserted");
    }

    async verifyAddedProduct(productName){
        //await this.page.locator("div li").first().waitfor();
        const bool = await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
        await this.checkout.click();
    }

    async performCheckout(userName){
        await this.country.pressSequentially("ind", { delay: 150 });
        await this.dropdown.waitFor();
        const optionsCount = await this.dropdown.locator("button").count();
        for(let i=0; i<optionsCount; ++i){
            const text = await this.dropdown.locator("button").nth(i).textContent();
            if(text === " India"){   
                await this.dropdown.locator("button").nth(i).click();
                break;
            }
        }
        expect(this.user.first()).toHaveText(userName);
        await this.submit.click();
    }

    async placeOrder(){
        await expect(this.orderMessage).toHaveText(" Thankyou for the order. ");
        const orderId = await this.readiOrderId.textContent();
        console.log(orderId);
        return orderId;
 
    }

    getProductLocator(productName){
        return this.page.locator("h3:has-text('"+productName+"')");   
    }
}