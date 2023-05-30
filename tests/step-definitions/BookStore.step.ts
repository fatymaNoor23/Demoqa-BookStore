const { Given, When, Then } = require('@wdio/cucumber-framework');
import { clickBackToStoreButton } from "../../main/bookPageDetails/tasks/bookPageDetails.tasks";
import * as bookDetail from "../../main/bookPageDetails/assertions/bookPageDetail.assertions";
import * as info from "../../main/bookStore/assertions/bookStore.assertions";
import { clickBook, searchBook } from "../../main/bookStore/tasks/bookStore.tasks";
import {  clickBooksWidget  } from "../../main/demoQaPage/actions/demoQa.actions";

Given("the user is on the DemoQA website",async()=>{
    await browser.url("https://demoqa.com/");
})

When("the user click on the Books widget", async()=>{
    await clickBooksWidget();
})

Then("the user should be navigated to the Books page",async()=>{
    await browser.url('https://demoqa.com/books');
})

Then("the user should see the search bar, login button, image, title, author, and publisher tab",async()=>{
    await info.verifySearchBtnDisplay();
    await info.verifyLoginBtnDisplay();
    await info.verifyImageTabDisplay();
    await info.verifyTitleTabDisplay();
    await info.verifyAuthorTabDisplay();
    await info.verifyPublisherTabDisplay();
})

//Scenario
When("the user type 'You Don't Know JS' in the search bar and search", async()=>{
    await searchBook();
})

Then("the user should see the title, author name, publisher name, and image URL",async()=>{
    await info.verifyNameOfBook();
    await info.verifyAuthorOfBook();
    await info.verifyPublisherOfBook();
    await info.verifyImgUrlOfBook();
})
When("the user click on the 'You Don't Know JS' option", async()=>{
    await clickBook();
})

Then("the user should be navigated to the correct URL",async()=>{
    await info.verifyCorrectUrl();
})

Then("the user should see the title, subtitles, page numbers,description and website URL",async()=>{
    await bookDetail.verifyTitleName();
    await bookDetail.verifySubTitleName();
    await bookDetail.verifypageNumbers();
    await bookDetail.verifyWebUrl();
})

When("the user click on the 'Back to Book Store' page", async()=>{
    await clickBackToStoreButton(); 
})

Then("the user should be navigated back to the Books page",async()=>{
    await bookDetail.verifyBacktoStoreUrl();
})