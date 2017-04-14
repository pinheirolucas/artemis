import { browser, element, by } from 'protractor';

export class ArtemisPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('artemis-root h1')).getText();
  }
}
