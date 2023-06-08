import { FoodService } from './../../../services/food.service';
import { food } from './../../../shared/model/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  food:food[] =[];

  constructor(private api:FoodService){
    this.food = api.getAll()    // to get all data
  }

  ngOnInit(){}
  }

