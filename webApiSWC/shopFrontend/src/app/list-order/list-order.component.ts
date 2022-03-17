import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  orderData:any;

  successmsg:any;

  ngOnInit(): void {


    this.service.getAllOrders().subscribe((res)=>{
      console.log(res,"res==>");

      this.orderData = res.data;
    });
  }

//delete by id
  deleteID(id:any){

    console.log(id,'deleteid==>');
    this.service.deleteOrder(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
      this.service.getAllOrders().subscribe((res)=>{
        console.log(res,"res==>");

        this.orderData = res.data;


    });
  });

}


}
