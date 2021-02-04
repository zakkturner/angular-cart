import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cart';

  productList = [
    { name: 'Z900', price: 8799 },
    { name: 'shubert helmet', price: 999 },
    { name: 'sport gloves', price: 99 },
  ];
  cartProductList = [];
}
