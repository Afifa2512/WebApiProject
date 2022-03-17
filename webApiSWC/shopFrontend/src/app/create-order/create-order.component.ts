import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update cam nk kuar kan ape tuu hahgahgahga
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if(this.getparamid){
    this.service.getOneOrder(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.orderForm.patchValue({
        customerName:res.data[0].customerName,
        orderCakeName:res.data[0].orderCakeName,
        orderDate:res.data[0].orderDate,
        finishDate:res.data[0].finishDate,
        total:res.data[0].total

      });
    });

  }
}

  orderForm = new FormGroup({

    'customerName':new FormControl('',Validators.required),
    'orderCakeName':new FormControl('',Validators.required),
    'orderDate':new FormControl('',Validators.required),
    'finishDate':new FormControl('',Validators.required),
    'total':new FormControl('',Validators.required)

  });

  //to create new order
  orderSubmit(){

    if(this.orderForm.valid){
      console.log(this.orderForm.value);
      this.service.createOrder(this.orderForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.orderForm.reset();
        this.successmsg = res.message;
      });
    }
    else
    {
      this.errormsg = 'all field iss required';
    }

  }



  orderUpdate(){
    //to show in console the data that has been added
    console.log(this.orderForm.value,'updatefrom');

    if(this.orderForm.valid){

      this.service.updateOrder(this.orderForm.value,this.getparamid).subscribe((res)=>{

        console.log(res,'resupdated');

        this.orderForm.reset(); // after we press enter it will dissapear
        this.successmsg = res.message;
      });
    }else{
      this.errormsg = 'all filed is required';

    }
  }

}



