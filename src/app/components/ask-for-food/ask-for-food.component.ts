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
    // $('.carousel').hammer().on('swipeleft', function(){
    //   // $(this).carousel('next');
    //   console.log('left');
    // })
    // $('.carousel').hammer().on('swiperight', function(){
    //   // $(this).carousel('prev'); 
    //   console.log('next');
    // })
  }

  addToCart(product) {
    if (!product.quantity) {
      product.quantity = 0;
    }
    product.quantity++;
  }

  removeFromCart(product) {
    product.quantity--;
    if (product.quantity === 0) {
      this.prev();
    }
  }

  next(product) {
    if (!(product.quantity || product.quantity === 0)) {
      $('.carousel').carousel('next');
      this.addToCart(product);
    }
  }

  prev() {
    $('.carousel').carousel('prev');
  }

}
