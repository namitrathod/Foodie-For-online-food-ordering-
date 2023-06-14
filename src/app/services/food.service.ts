import { Injectable } from '@angular/core';
import { food } from '../shared/model/food';
import { sample_foods } from 'src/data';
import { NgControlStatusGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():food[]{
    return sample_foods;
  }
  // search food
  getAllFoodbySearch(searchTerm:string){
      // console.log(this.getAll().filter((food)=>food.name.toLowerCase()));
      // const re= this.getAll().filter((food)=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
      // console.log(re);
      
      return this.getAll().filter((food)=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));

      
  }
}
