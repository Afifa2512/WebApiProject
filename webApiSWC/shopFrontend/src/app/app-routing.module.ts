import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {CreateOrderComponent} from './create-order/create-order.component';
import {ListOrderComponent} from './list-order/list-order.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {LoginComponent} from './login/login.component';
import {CustomerComponent} from './customer/customer.component';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import { CustPageComponent } from './cust-page/cust-page.component';
import {CakeListComponent} from './cake-list/cake-list.component'

const routes: Routes = [
  {path:'adminPage',component:AdminPageComponent},
  {path:'createOrder',component:CreateOrderComponent},
  {path:'createOrder/:id',component:CreateOrderComponent},
  {path:'listOrder',component:ListOrderComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'faq',component:FaqComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'customer',component:CustomerComponent},
  {path:'createCustomer',component:CreateCustomerComponent},
  {path:'createCustomer/:id',component:CreateCustomerComponent},
  {path: 'custPage',component:CustPageComponent},
  {path: 'cakeList',component:CakeListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
