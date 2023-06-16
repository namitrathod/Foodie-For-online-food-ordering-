import { CartItem } from './../../../shared/model/cartItem';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/model/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!:Cart 
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart)=>{this.cart= cart;});

  }
  ngOnInit(): void {}
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(CartItem:CartItem,quantityInstring:string){
    const quantity = parseInt(quantityInstring);
    this.cartService.changeQuantity(CartItem.food.id, quantity); 
  }
}
