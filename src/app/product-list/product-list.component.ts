import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  styles: [
    `
      :host {
        border: 1px solid #000;
      }
    `,
  ],
})
export class ProductListComponent implements OnInit {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    console.log('clicked')
    this.productAdded.emit(product);
  }
  constructor() {}

  ngOnInit(): void {}
}
