import { Injectable } from '@angular/core';
import { food } from '../shared/model/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():food[]{
    return sample_foods;
  }
}
