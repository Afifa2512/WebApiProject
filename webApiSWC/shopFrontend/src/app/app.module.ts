import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ListOrderComponent } from './list-order/list-order.component';

import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustPageComponent } from './cust-page/cust-page.component';
import { CakeListComponent } from './cake-list/cake-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    CreateOrderComponent,
    ListOrderComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent,
    LoginComponent,
    CustomerComponent,
    CreateCustomerComponent,
    CustPageComponent,
    CakeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
