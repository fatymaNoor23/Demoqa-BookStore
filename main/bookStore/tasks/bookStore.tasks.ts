import { bookName, searchBox } from "../user_interface/bookStore.ui";

export async function searchBook(){
    await searchBox.waitForDisplayed();
    searchBox.setValue("You Don't Know JS");
    await browser.keys('Enter');   
}

export async function clickBook(){
    const book=await bookName;
    await book.waitForClickable();
    await book.waitForDisplayed();
    await book.click();
}