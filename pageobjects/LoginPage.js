class LoginPage{

    constructor(page){
        this.page = page;
        this.userName = page.locator('#userEmail');
        this.passWord = page.locator('#userPassword');
        this.loginButton = page.locator("#login");
    }

    goto(){
        this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(userName, passWord){
        await this.userName.fill(userName);
        await this.passWord.fill(passWord);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');    }
}
module.exports = {LoginPage};