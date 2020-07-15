import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit {
  title = 'invoice';
  totalAmount:number;
  gstTotal:number;
  grandTotal:number;
  gstPercentage;

  ngOnInit() {
    this.totalAmount = 0;
    this.gstTotal = 0;
    this.grandTotal = 0;
    this.gstPercentage = 12;
  }

  // Product Amount
  getProductAmount(data: number) {
    this.totalAmount = data;
    this.gstTotal = (this.totalAmount*this.gstPercentage)/100;
    this.grandTotal = this.totalAmount +  this.gstTotal;
  }

  // GST Calculation
  gstCalculation(event: any) {
    this.gstPercentage = event.target.value;
    this.gstTotal = (this.totalAmount*this.gstPercentage)/100;
    this.grandTotal = this.totalAmount +  this.gstTotal;
  }
}
