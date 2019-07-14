import { AngularSimpleRedditPage } from './app.po';

describe('angular-simple-reddit App', () => {
  let page: AngularSimpleRedditPage;

  beforeEach(() => {
    page = new AngularSimpleRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
