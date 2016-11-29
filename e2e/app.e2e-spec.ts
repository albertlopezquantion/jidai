import { JidaiPage } from './app.po';

describe('jidai App', function() {
  let page: JidaiPage;

  beforeEach(() => {
    page = new JidaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
