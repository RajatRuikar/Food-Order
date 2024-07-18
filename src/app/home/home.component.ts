import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FoodService } from "../services/food/food.service";
import { Foods } from "../shared/models/food";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private fs: FoodService, private router: ActivatedRoute) {
  }


  foods: Foods[] = [];
  Fo!: FoodService;
  @Output() inputEvent = new EventEmitter()



  tag(tag: string): boolean {
    if (tag === 'Veg')
      return false;
    else
      return true;
  }

  onAddBag(food: Foods): void {

    FoodService.foodStoreCollection(food);
    // alert(food.name+" added in a cart");
    confirm(food.name + " added in a cart");

  }
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.foods = this.fs.getAll();
    })

  }

}
