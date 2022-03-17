import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }


  errormsg:any;
  successmsg:any;
  getparamId:any;

  ngOnInit(): void {
    this.getparamId = this.router.snapshot.paramMap.get('id');
    if(this.getparamId){
      this.service.getOneCustomer(this.getparamId).subscribe((res)=>{

        console.log(res,'res==>');
        this.custForm.patchValue({

          custName:res.data[0].custName,
          password:res.data[0].password,
          username:res.data[0].username,
          email:res.data[0].email

        });
      });
    }

  }

  custForm = new FormGroup({
    'custName': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required),
    'username': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required)

  });

//create new customer
  custSubmit(){
    if(this.custForm.valid)
    {
      console.log(this.custForm.value);
      this.service.createCustomer(this.custForm.value).subscribe((res)=>{
        console.log(res,'res==>');
        this.custForm.reset();
        this.successmsg = res.message;
      });
    }
    else{
      this.errormsg = 'all file is required';
    }

  }

  custUpdate(){
    console.log(this.custForm.value,'customer updated');

    if(this.custForm.valid){

      this.service.updateCustomer(this.custForm.value,this.getparamId).subscribe((res)=>{

        console.log(res,'resupdated');

        this.custForm.reset(); // after we press enter it will dissapear
        this.successmsg = res.message;
      });
    }else{
      this.errormsg = 'all filed is required';

    }
  }

}
