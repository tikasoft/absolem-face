import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { error } from 'selenium-webdriver';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get('./assets/data/orders.json');
  }

  getOrderDetail(orderId: number): Array<any> {
    let orderDetails: Array<any> = new Array();
    this.http.get<Array<any>>('./assets/data/orderDetails.json').subscribe(
      response => {
        for (let orderDetail of response) {
          if (orderDetail.orderId === orderId) {
            orderDetails.push(orderDetail);
          }
        }
      },
      error => {

      }
    );
    return orderDetails;
  }

}
