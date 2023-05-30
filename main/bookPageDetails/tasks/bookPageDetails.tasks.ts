import { backButton } from "../user_interface/bookPageDetail.ui";

export async function clickBackToStoreButton() {
    const backBtn = await backButton;
    await backBtn.scrollIntoView({ block: 'end'});
    await backBtn.waitForDisplayed();
    await backBtn.waitForClickable({ timeout: 15000, timeoutMsg: 'Back button not clickable' });
    await backBtn.click();
  }
  
