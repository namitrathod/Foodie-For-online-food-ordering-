import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FoodService } from 'src/app/services/food.service';
import { food } from 'src/app/shared/model/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!:food;
  constructor(activatedroute:ActivatedRoute, private api:FoodService, config: NgbRatingConfig,
     private cartService:CartService, private router:Router){
      activatedroute.params.subscribe((params)=>{
        if(params.id)
        this.food= api.getFoodById(params.id);
      })

      config.max = 5;                 // for star reviews 
      config.readonly = true;
  }
  ngOnInit(): void {}

  //Add to cart button
  addToCart(){
    this.cartService.addTOCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}
