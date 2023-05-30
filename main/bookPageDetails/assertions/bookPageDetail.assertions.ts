import assert from 'soft-assert'
import data from '../../utils/bookInfor.json';

export async function verifyTitleName() {
    const titleText=await data.Title;
    await assert.softAssert( titleText,"You Don't Know JS", "error",[]);
    await assert.softAssertAll();
}

export async function verifySubTitleName() {
    const subTitleText=await data.subTitle;
    await assert.softAssert( subTitleText ,"ES6 & Beyond", "error",[]);
    await assert.softAssertAll();
}

export async function verifypageNumbers() {
    const pageText=await data.Pages;
    await assert.softAssert(pageText,278,"error",[]);
    await assert.softAssertAll();
}

export async function verifyWebUrl() {
    const urlText=await data.Website;
    await assert.softAssert(await urlText,"https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond","error",[]);
    await assert.softAssertAll();
}

export async function verifyDescriptionOfBook(){
    const discrption=await data.Description;
    await assert.softAssert(discrption,"No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the \"You Don’t Know JS\" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the st","error",[])
    await assert.softAssertAll();
}

export async function verifyBacktoStoreUrl() {
    const currentUrl=await browser.getUrl();
    const url='books'
    const expectedUrl=await "https://demoqa.com/"+url;
    await assert.softAssert(currentUrl,expectedUrl, 'URL verification failed',[]);
    await assert.softAssertAll();
}