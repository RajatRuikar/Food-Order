import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit{

  image2 !: string;
  constructor( private fs : FoodService,private router:ActivatedRoute){
  }

  ngOnInit():void{
    this.router.params.subscribe(params=>{
      this.image2=this.fs.getError();
    })
  }
}
