import { expect } from '@playwright/test';
const fs=require('fs');
exports.BookStore=
class BookStore{
    constructor(page){
        this.page=page;
        this.bookstorebtn="//span[normalize-space()='Book Store']";
        this.searchbox="//input[@id='searchBox']";
        this.search="//span[@id='basic-addon2']//span//*[name()='svg']";
        //this.booklocation="//div[@class='rt-tbody']//div[1]//div[1]//div[2]";
    }
    //search for the book 
    async searchBook(bookname){
        await this.page.locator(this.bookstorebtn).click();
        await this.page.locator(this.searchbox).fill(bookname);
        await this.page.keyboard.press('Enter');
        //await this.page.waitForTimeout(6000);
        const booktitleloc=this.page.locator(`a:has-text("${bookname}")`);
        await expect(booktitleloc).toBeVisible();
        return booktitleloc;

    }
    async saveBookdetails(){
        // Locating the title,author and publisher of the book
        const title = await this.page.locator("//div[@class='rt-tr-group'][1]//a").textContent();
        const author = await this.page.locator("//div[@class='rt-tr-group'][1]//div[@class='rt-td'][3]").textContent();
        const publisher = await this.page.locator("//div[@class='rt-tr-group'][1]//div[@class='rt-td'][4]").textContent();
        fs.writeFileSync('detailsOfBook.txt',`Title of the book is:${title}\nAuthor of the book is:${author}\nPublisher of the book is:${publisher}`);
    }
}