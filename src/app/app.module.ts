import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    InvoiceListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
