export class HomePage {
  constructor(page) {
    this.page = page;

    //locators
    this.productList = page.locator('//*[@id="tbodyid"]/div/div/div/h4/a')
    this.addToCartbtn = page.getByRole('link', { name: /Add to cart/i });
    this.cart = page.locator("#cartur");
  }

  async addProductToCart(productName) {
    const productList = await this.productList.all();
    for (const product of productList) {
      const text = await product.textContent();
      if (text === productName) {
        await product.click();
        break;
      }
    }

    await this.page.on('dialog', async dialog => {
      if (dialog.message().includes('Product added.')) {
        await dialog.accept();
      }
    })

    await this.addToCartbtn.click();
  }

  async gotoCart() {
    await this.cart.click();
  }
}