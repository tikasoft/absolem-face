import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'aps-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Array<any>;
  currentOrderDetail: any = {};

  constructor(private orderService: OrderService) {
    this.fillOrders();
  }

  ngOnInit() {
  }

  fillOrders(): void {
    this.orderService.getOrders().subscribe(
      (response) => {
        this.orders = response;
      },
      error => {

      }
    );
  }

  getOrderDetail(orderId, orderName, orderNumber): any {
    this.currentOrderDetail = {};
    this.currentOrderDetail.orderName = orderName;
    this.currentOrderDetail.orderNumber = orderNumber;
    var orderDetails = this.orderService.getOrderDetail(orderId);
    this.currentOrderDetail.details = orderDetails;
  }
}

