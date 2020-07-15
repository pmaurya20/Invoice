import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class InvoiceComponent {
  @Input() grandTotal:number;
}