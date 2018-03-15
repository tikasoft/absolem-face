import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

declare const $: any;
@Component({
  selector: 'aps-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Array<any>;
  currentOrderDetail: any = {};
  orderDetailsToEdit: Array<any> = [];

  constructor(private orderService: OrderService) {
    this.fillOrders();
  }

  ngOnInit() {
    $('#active-orders-box').boxWidget('toggle');
    $('#payed-orders-box').boxWidget('toggle');
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

  getOrderDetail(orderId, orderName, orderNumber): void {
    this.currentOrderDetail = {};
    this.currentOrderDetail.orderName = orderName;
    this.currentOrderDetail.orderNumber = orderNumber;
    var orderDetails = this.orderService.getOrderDetail(orderId);
    this.currentOrderDetail.details = orderDetails;
  }

  addEditableOrderDetail(): void {
    this.orderDetailsToEdit = this.currentOrderDetail.details.map(d => Object.assign({}, d));
    console.log(this.orderDetailsToEdit);
    console.log(this.currentOrderDetail.details);
  }

  deleteOrderDetail(currentData): void {
    currentData.softDelete = 1;
  }

  returnOrderDetail(currentData): void {
    currentData.softDelete = 0;
  }

  updateOrderDetail(): void {
    this.orderDetailsToEdit.forEach((current) => {
      current.totalPrice = current.amount * current.unitPrice;
    });
    this.currentOrderDetail.details = this.orderDetailsToEdit;
  }
}

