const config=require('../config');
exports.firstpage=
class firstpage{
    constructor(page){
        this.page=page;
        this.bookstoreclick="//div[6]";


    }
    async gotoFirstPage(){
        await this.page.goto(config.APP_URL);
    }
    async selectBookStore(){
        await this.page.locator(this.bookstoreclick).click();

    }
}