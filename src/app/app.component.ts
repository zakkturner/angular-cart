import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cart';

  addProductToCart(product){
    const productExistInCart = this.cartProductList.find(({name}) => name === product.name);
    if (!productExistInCart){
      this.cartProductList.push({...product, num:1})
      return ;
    }
    productExistInCart.num += 1;
  }

  productList = [
    { name: 'Z900', price: 8799 },
    { name: 'shubert helmet', price: 999 },
    { name: 'sport gloves', price: 99 },
  ];
  cartProductList = [];
}
