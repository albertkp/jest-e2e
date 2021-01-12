let FirstPage = require('../pages/first.po.js');

describe('Open google and search for Jest', () => {
  test('should search for jest', async () => {
  	jest.setTimeout(10000);
    let google = new FirstPage();
    await google.openGoogle();
    await google.search('jest');
    await google.clickSearch();
    let title = await google.getTitle();
    expect(title).toBe('jest - Google Search');
  });
});
