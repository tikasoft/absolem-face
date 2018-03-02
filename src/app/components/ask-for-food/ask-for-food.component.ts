import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'aps-ask-for-food',
  templateUrl: './ask-for-food.component.html',
  styleUrls: ['./ask-for-food.component.scss']
})
export class AskForFoodComponent implements OnInit {

  eatMeList: Array<any>;

  constructor() {
    this.eatMeList = [
      {
        id: 1,
        name: 'Café',
        price: 7,
        imgURL: './assets/img/coffee2.jpg'
      },
      {
        id: 2,
        name: 'Salchi',
        price: 20,
        imgURL: './assets/img/coffee3.jpg'
      }
    ];
  }

  ngOnInit() {
  }

  private addToCart(product) {
    if (!product.quantity) {
      product.quantity = 0;
    }
    product.quantity++;
  }

  private removeFromCart(product) {
    product.quantity--;
    if (product.quantity === 0) {
      this.prev(product);
    }
  }

  private next(product) {
    if (!(product.quantity)) {
      $('#eatMe' + product.id).carousel('next');
    }
    this.addToCart(product);
  }

  private prev(product) {
    $('#eatMe' + product.id).carousel('prev');
  }

  swipeRight(product) {
    this.removeFromCart(product);
  }

  swipeLeft(product) {
    this.next(product);
  }
}
