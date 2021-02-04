import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: 1fr auto;
        // change the second "1fr" to "auto"
        grid-column-gap: 10px;
        border: solid 1px blue;
      }
      div:nth-child(1) {
        font-weight: bold;
      }
    `,
  ],
})
export class ProductComponent implements OnInit {
  @Input() product: any;

  constructor() {}

  ngOnInit(): void {}
}
