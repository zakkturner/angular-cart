import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  styles: [
    `
      :host {
        border: 1px solid #000;
      }
    `,
  ],
})
export class ShoppingCartComponent implements OnInit {
  @Input() products: any[];
  total(){
    return this.products.reduce((sum, prod) => sum += prod.num, 0)
  }

  constructor() {}

  ngOnInit(): void {}
}
