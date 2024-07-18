  import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-on-cart',
  templateUrl: './on-cart.component.html',
  styleUrls: ['./on-cart.component.css']
})
export class OnCartComponent implements OnInit {
  image3!: string;
  foods: Foods[] = [];
  foodHistory: Foods[] = [];
  isvalid = this.isValidFunction();
  totalPrice = FoodService.total;
  totalQantity = FoodService.quantity;
  historyclicked =false;
  values!: boolean;
  constructor(private fs: FoodService, private router: ActivatedRoute) {
  }

  add(foodname: String) {

  }

  removeItem(i: string) {
    if (FoodService.foodStore.length == 0 || this.totalPrice == 0)
    this.values = false;
  else
    this.values = true;

    this.foods.forEach((element, index) => {
      if (element.name == i) {
        this.totalQantity = this.totalQantity - element.foodQuantity;
        this.totalPrice = this.totalPrice - element.price * element.foodQuantity;
        this.foods.splice(index, 1);
        
      }
      
    });
    FoodService.total = this.totalPrice;
    FoodService.quantity = this.totalQantity;

    if(this.totalPrice==0)
    {
      this.isvalid=false;
    }
  }
  
  history(){
  this.historyclicked =!this.historyclicked;
    
    this.fs.fetchHistory().subscribe(
      (Response)=>
      {
        const data = JSON.stringify(Response);

        this.foodHistory = JSON.parse(data);
        // console.log(data)
      },
      (err)=>console.log(err)
    )
  }

  Ordered(): void {
    this.fs.onOrdered(this.foods).subscribe(
      (Response)=>console.log(Response),
      (err)=>console.log(err)
    )
    console.log(this.foods);   
  }

  historyItem(): boolean{
    if(this.foodHistory.length==0){
      return true;
    }
    else 
    return false;
  }
  isValidFunction(): boolean {
    if (FoodService.foodStore.length == 0 || this.totalPrice == 0)
      return this.values = false;
    else
    return this.values = true;
  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.foods = FoodService.getFood();
      this.image3 = this.fs.getCart();
      
    })


  }
}
