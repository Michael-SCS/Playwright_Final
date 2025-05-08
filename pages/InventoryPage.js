export class InventoryPage {
    constructor(page) {
      this.page = page;
      this.productTitles = page.locator('.inventory_item_name');
      this.addToCartButtons = page.getByRole('button', { name: 'Add to cart' });
      this.cartIcon = page.locator('.shopping_cart_link');
    }
  
    async addFirstNProducts(n) {
      for (let i = 0; i < n; i++) {
        await this.addToCartButtons.nth(i).click();
      }
    }
  
    async goToCart() {
      await this.cartIcon.click();
    }
  
    async getCartCount() {
      return await this.page.locator('.shopping_cart_badge').innerText();
    }
  
    async getProductCountInCart() {
      return await this.page.locator('.cart_item').count();
    }
  }
  