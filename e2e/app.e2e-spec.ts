import { ArtemisPage } from './app.po';

describe('artemis App', () => {
  let page: ArtemisPage;

  beforeEach(() => {
    page = new ArtemisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('artemis works!');
  });
});
