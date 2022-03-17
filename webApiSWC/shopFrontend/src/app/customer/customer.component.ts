import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  listcust:any;
  successmsg:any;

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe((res)=>{
      console.log(res,'res==>');

      this.listcust = res.data;
    });

  }

  //delete by id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteCustomer(id).subscribe((res)=>{
      console.log(res,'delete==>');
      this.successmsg = res.message;

      this.getAllCustomer();

    });

  }

  //get Customer
  getAllCustomer(){

    this.service.getAllCustomers().subscribe((res)=>{
      console.log(res,'res==>');

      this.listcust = res.data;
    });
  }

}
