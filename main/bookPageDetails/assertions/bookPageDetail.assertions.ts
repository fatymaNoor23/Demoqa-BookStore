import assert from 'soft-assert'
import { pages, subTitle, titleName, webUrl } from '../user_interface/bookPageDetail.ui';
export async function verifyTitleName() {
    const titleText=await titleName.getText();
    await assert.softAssert( titleText,"You Don't Know JS", "error",[]);
    await assert.softAssertAll();
}

export async function verifySubTitleName() {
    const subTitleText=await subTitle.getText();
    await assert.softAssert( subTitleText ,"ES6 & Beyond", "error",[]);
    await assert.softAssertAll();
}

export async function verifypageNumbers() {
    const pageText=await pages.getText();
    await assert.softAssert(pageText,"278","error",[]);
    await assert.softAssertAll();
}

export async function verifyWebUrl() {
    const urlText=(await webUrl).getText();
    await assert.softAssert(await urlText,"https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond","error",[]);
    await assert.softAssertAll();
}

export async function verifyBacktoStoreUrl() {
    const currentUrl=await browser.getUrl();
    const url='books'
    const expectedUrl=await "https://demoqa.com/"+url;
    await assert.softAssert(currentUrl,expectedUrl, 'URL verification failed',[]);
    await assert.softAssertAll();
}