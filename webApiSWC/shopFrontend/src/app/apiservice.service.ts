import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';

//order url

const postOrderUrl = 'http://localhost:8080/orders/add';
const delOrderUrl = "http://localhost:8080/orders/del";
const putOrderUrl = 'http://localhost:8080/orders/put';
const baseOrderUrl = "http://localhost:8080/orders";

//customer url

const postCustUrl = 'http://localhost:8080/customers/add';
const delCustUrl = 'http://localhost:8080/customers/del';
const putCustUrl = 'http://localhost:8080/customers/put';
const baseCustUrl = 'http://localhost:8080/customers';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //conneting the shopFrontend to shopBackend

  //get allorder
  getAllOrders():Observable<any>{
    const orderUrl = "http://localhost:8080/allorders"
    return this._http.get<any>(orderUrl)

  }

  //create order

  createOrder(orders: any):Observable<any>{
    console.log(orders,'createapi=>');
    return this._http.post(postOrderUrl, orders)
  }

  //delete order

  deleteOrder(id: any): Observable<any> {

      return this._http.delete(`${delOrderUrl}/${id}`);

    }

    //update order
    updateOrder(orders:any,id:any):Observable<any>{

      return this._http.put(`${putOrderUrl}/${id}`, orders);

    }

    getOneOrder(id:any):Observable<any>{
      return this._http.get(`${baseOrderUrl}/${id}`);
    }

    //CUSTOMER
    getAllCustomers():Observable<any>{
      const custUrl ="http://localhost:8080/allcustomers"
      return this._http.get<any>(custUrl)

    }

    //to create customer
    createCustomer(cust:any):Observable<any>{
      console.log(cust,'createapi=>');
      return this._http.post(postCustUrl, cust)

    }

    //delete customer

    deleteCustomer(id:any):Observable<any>{
      return this._http.delete(`${delCustUrl}/${id}`);
    }


    //update customer
    updateCustomer(cust:any,id:any):Observable<any>{
      return this._http.put(`${putCustUrl}/${id}`, cust);

    }

    //get one customer
    getOneCustomer(id:any):Observable<any>{
      let ids = id;
      return this._http.get(`${baseCustUrl}/${id}`)
    }

    getAllAdmin():Observable<any>{
      const adminUrl = "http://localhost:8080/alladmin"
      return this._http.get<any>(adminUrl)

    }


}
