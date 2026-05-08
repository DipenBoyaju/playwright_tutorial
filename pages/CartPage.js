export class CartPage {

  constructor(page) {
    this.page = page;
    this.noOfProducts = page.locator("tbody tr td:nth-child(2)")
  }

  async checkProductInCart(productName) {
    const productsInCart = await this.noOfProducts.all();
    for (const product of productsInCart) {
      const prod = await product.textContent();
      if (productName === prod) {
        return true;
        break;
      }
    }
  }
}