import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { food } from '../shared/model/food';
import { CartItem } from '../shared/model/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  //add to cart
  addTOCart(food:food):void{
      let cartItem= this.cart.item.find(item=>item.food.id === food.id)
      if(cartItem)
      return;

      this.cart.item.push(new CartItem(food));
      this.setCartToLocalStorage();
  }
  // remove Item from cart
  removeFromCart(foodId:string){
      this.cart.item= this.cart.item.filter(item=>item.food.id != foodId);
      this.setCartToLocalStorage();
  }

  //Change Quantity 
  changeQuantity(foodId:string, quantity:number){
    let cartItem =this.cart.item.find(item=>item.food.id === foodId);
    if(!cartItem)
    return;

    cartItem.quantity =quantity;
    cartItem.price=quantity*cartItem?.food.price;
    this.setCartToLocalStorage();

  }

  //clear cart
  clearCart(){
    this.cart =new Cart();
    this.setCartToLocalStorage();
  }

  //get cart observable means check observable data
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  //now set local storage data
  private setCartToLocalStorage():void{
    this.cart.totalPrice =this.cart.item.reduce((prevSum, CurrentItem)=>prevSum+ CurrentItem.price,0);
    this.cart.totalCount =this.cart.item.reduce((prevSum, currentItem)=>prevSum + currentItem.quantity,0);

    const cartjson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartjson);
    this.cartSubject.next(this.cart);
  }

  // get data from local storage
  private getCartFromLocalStorage():Cart{
    const cartjson = localStorage.getItem('Cart');
    return cartjson?JSON.parse(cartjson):new Cart();
  }


}
