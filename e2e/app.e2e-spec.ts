import { MoneyTrackerPage } from './app.po';

describe('money-tracker App', () => {
  let page: MoneyTrackerPage;

  beforeEach(() => {
    page = new MoneyTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
