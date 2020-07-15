import { Component, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import { Product } from '../invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InvoiceListComponent {
  products: Product[] = [
    new Product('', 0.00, 1, 0.00)
  ];
  productAmount;
  productQuantity;
  productPrice;
  @Output('amountChange') total:EventEmitter<number> = new EventEmitter<number>();

  // Add Item
  addItem() {
    this.products.push(new Product('', 0.00, 1, 0.00))
  }

  // Delte Item
  deleteItem(index: any) {
    this.products.splice(index, 1);
    this.total.emit(this.products.reduce((prev, product) => { return prev + product.amount; }, 0));
  }

  // Price Input on chnage
  inputOnChange(event: any, index: number) {
    this.productQuantity = this.products[index].quantity;
    this.productPrice = event.target.value;
    this.productAmount = this.productQuantity*this.productPrice;
    this.products[index].price = this.productPrice;
    this.products[index].amount = this.productAmount;
    this.total.emit(this.products.reduce((prev, product) => { return prev + product.amount; }, 0));
  }

  // Quantity Input on Change
  inputQuantityChange(event: any, index: number) {
    this.productQuantity = event.target.value;
    this.productAmount = this.productQuantity*this.productPrice;
    this.products[index].amount = this.productAmount;
    this.total.emit(this.products.reduce((prev, product) => { return prev + product.amount; }, 0));
  }
}
