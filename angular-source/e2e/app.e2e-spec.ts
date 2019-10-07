import { AngularSourcePage } from './app.po';

describe('angular-source App', function() {
  let page: AngularSourcePage;

  beforeEach(() => {
    page = new AngularSourcePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
