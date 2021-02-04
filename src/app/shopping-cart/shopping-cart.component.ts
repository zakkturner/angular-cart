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

  constructor() {}

  ngOnInit(): void {}
}
