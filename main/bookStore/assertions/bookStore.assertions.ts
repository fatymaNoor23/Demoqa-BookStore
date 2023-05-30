import assert from 'soft-assert';
import { authorTab, imageTab, loginButton, publisherTab, searchBox, titleTab } from '../user_interface/bookStore.ui';
import bookData from "../../utils/bookInfor.json"

export async function verifyLoginBtnDisplay() {
  await assert.softAssert(await loginButton.isDisplayed(), true,"error",[]);
  await assert.softAssertAll();
}

export async function verifySearchBtnDisplay() {
  await assert.softAssert(await searchBox.isDisplayed(), true,"error",[]);
  await assert.softAssertAll();
}

export async function verifyImageTabDisplay() {
  await assert.softAssert(await imageTab.isDisplayed(), true,"error",[]);
  await assert.softAssertAll();
}

export async function verifyTitleTabDisplay() {
  await assert.softAssert(await titleTab.isDisplayed(), true,"error",[]);
  await assert.softAssertAll();
}

export async function verifyAuthorTabDisplay() {
  await assert.softAssert(await authorTab.isDisplayed(), true,"error",[]);
  await assert.softAssertAll();
}

export async function verifyPublisherTabDisplay() {
  await assert.softAssert(await publisherTab.isDisplayed(),true,"error",[]);
  await assert.softAssertAll();
}

export async function verifyNameOfBook() {
    const name=await bookData.Title;
    await assert.softAssert(name,"You Don't Know JS","error",[]);
    await assert.softAssertAll();  
}
export async function verifyAuthorOfBook() {
    const author=await bookData.Author;
    await assert.softAssert(author,'Kyle Simpson',"error",[])
    await assert.softAssertAll(); 
}

export async function verifyPublisherOfBook(){
    const publisher=await bookData.Publisher;
    await assert.softAssert(publisher,"O'Reilly Media","error",[]);
    await assert.softAssertAll(); 
}

export async function verifyImgUrlOfBook(){
    const imgURL=await bookData.ImageUrl;
    await assert.softAssert(imgURL,"/images/bookimage0.jpg","ERROR",[])
    await assert.softAssertAll();
}

export async function verifyCorrectUrl() {
    const currentUrl = await browser.getUrl();
    const ISBN = '9781491904244';
    const expectedUrl = 'https://demoqa.com/books?book='+ISBN;
    await assert.softAssert(currentUrl,expectedUrl, 'URL verification failed',[]);
    await assert.softAssertAll();
  }

