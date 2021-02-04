import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
