import { NgEnvPage } from './app.po';

describe('ng-env App', function() {
  let page: NgEnvPage;

  beforeEach(() => {
    page = new NgEnvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
