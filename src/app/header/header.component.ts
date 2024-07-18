import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from "../shared/models/food";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  items: Foods[] = [];

  constructor() {

  }
  isVisible = false;
  addItem() {
    this.isVisible = !this.isVisible;
    // console.log(this.isVisible);
  }


}
