import { Component } from '@angular/core';
import { Foods } from './shared/models/food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodorder';
  foods: Foods[] = [];
  // clicking : boolean=false;
  // event(){
  //   this.clicking= !this.clicking;
  // }

  pushItem(item:Foods){
    this.foods.push(item);
    // console.log(this.foods.values)
  }
}
