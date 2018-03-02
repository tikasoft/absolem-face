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
        name: 'Café',
        price: 7,
        imgURL: './assets/img/coffee.jpg'
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
      this.prev();
    }
  }

  private next(product) {
    if (!(product.quantity)) {
      $('.carousel').carousel('next');
    }
    this.addToCart(product);
  }

  private prev() {
    $('.carousel').carousel('prev');
  }

  swipeRight(product) {
    this.removeFromCart(product);
  }

  swipeLeft(product) {
    this.next(product);
  }
}
