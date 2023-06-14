import { ActivatedRoute } from '@angular/router';
import { FoodService } from './../../../services/food.service';
import { food } from './../../../shared/model/food';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbRatingConfig]
})
export class HomeComponent implements OnInit {
  foods:food[] =[];

  constructor(private api:FoodService, config: NgbRatingConfig, activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.foods= this.api.getAllFoodbySearch(params.searchTerm)
        console.log(params.searchTerm);
      }
      else{
        this.foods= api.getAll();
        }
      }
    );


    config.max = 5;                 // for star reviews 
		config.readonly = true;

  }

  ngOnInit(){}
  }

