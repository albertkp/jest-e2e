class FirstPage {
  constructor() {
    this.url = 'https://google.com';
    this.searchBar = element(by.css('[title="Search"]'));
    this.googleSearchButton = element.all(by.css('[value="Google Search"]'));
  }

  async openGoogle() {
    await browser.get(this.url);

  }
  async search(keyword) {
  	await this.searchBar.sendKeys(keyword);
  }
  async clickSearch() {
  	const buttons = await this.googleSearchButton;
  	buttons[1].click();
  }
  async getTitle(matched) {
	await browser.manage().setTimeouts( { implicit: 2000 } );
    return await browser.getTitle();
  }
}

module.exports = FirstPage;
