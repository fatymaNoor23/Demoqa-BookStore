import { booksWidget } from "../user_interface/demoQa.ui";

export async function clickBooksWidget() {
    const booksClick=await booksWidget;
    await booksClick.waitForClickable();
    await booksClick.waitForDisplayed();
    await booksClick.click();
}