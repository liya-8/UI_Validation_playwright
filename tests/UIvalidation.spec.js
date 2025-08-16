import { test, expect } from '@playwright/test';
import {firstpage} from '../pages/firstpage';
import { LoginPage } from '../pages/LoginPage';
import { BookStore } from '../pages/BookStore';
const config=require('../config');


test('UI Validation', async ({ page }) => {
   //object creation fo firstpage
   const first_page=new firstpage(page);
   await first_page.gotoFirstPage();
   await page.waitForTimeout(6000);
   await first_page.selectBookStore();
   await page.waitForTimeout(6000);
   //login actions 
   const loggin=new LoginPage(page);
   await loggin.login(config.USERNAME,config.PASSWORD);
  // await page.waitForTimeout(6000);
   await loggin.UIvalidation(config.USERNAME);
   //await page.waitForTimeout(6000);
   //booksearch actions
   const bookstore=new BookStore(page);
   await bookstore.searchBook(config.BOOKNAME);
   await page.waitForTimeout(3000);
   await bookstore.saveBookdetails();
   await page.waitForTimeout(3000);




})