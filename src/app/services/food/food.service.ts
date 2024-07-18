import { ParseFlags } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foods } from 'src/app/shared/models/food';
// import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // static foodStore: any;

  constructor(private http: HttpClient) { }
  url='https://fooddatabase-9569c-default-rtdb.firebaseio.com/foodAtCart.json';


  fetchHistory(){
    return this.http.get(this.url)
  }
  onOrdered(foodAtCart:any[]){
    return this.http.put(this.url,foodAtCart)
  }

  getAllFoodByTag(tag: string): Foods[] {
    if (tag == 'All')
      return this.getAll();
    else
      return this.getAll().filter(Foods => Foods.tag?.includes(tag));
  }

  // getAllTag(): Tag[] {
  //   return [
  //     { name: 'All' },
  //     { name: 'Non-Veg' },
  //     { name: 'Veg' }
  //   ]
  // }

  static foodStore: Foods[] = [];
  static total: number = 0;
  static quantity: number = 0;
  static flag: number = 0;

  static foodStoreCollection(item: Foods) {
    this.flag = 0;
    if (this.quantity == 0) {
      this.foodStore.push(item);
      this.flag = 1;
    }
    else {
      this.foodStore.forEach(element => {
        if (element.id === item.id) {
          element.foodQuantity = element.foodQuantity + 1;
          this.flag = 1;
          element.Available = 1;
        }

      });
    }
    
    if (this.flag == 0 && item.Available == 0) {
      this.foodStore.push(item);

    }
    this.total = item.price + this.total;

    this.quantity = this.quantity + 1;
  }




  image1!: string;
  getError(): string {
    this.image1 = 'assets/error.png';
    return this.image1;
  }
  image3!: string;
  getCart(): string {
    this.image3 = 'assets/cart.png';
    return this.image3;
  }
  // export const addFoodSub = 
  static getFood(): Foods[] {
    // for (let i = 0; i < 5; i++) {
    //   // const element = 5[i];
    // console.log(this.foodStore);

    // }
    return this.foodStore;
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 380,
        name: 'Non-Veg Pizza',
        favorite: false,
        star: 4.5,
        tag: 'Non-Veg',
        imageurl: 'assets/food1.jpg',
        foodQuantity: 1,
        Available: 0,
      },
      {
        id: 2,
        price: 340,
        name: 'Classic Cheese Pizza',
        favorite: false,
        star: 4.2,
        tag: 'Veg',
        imageurl: 'assets/food2.jpg',
        foodQuantity: 1,
        Available: 0,

      },
      {
        id: 3,
        price: 350,
        name: 'Classic Pizza',
        favorite: true,
        star: 4.7,
        tag: 'Veg',
        imageurl: 'assets/food3.jpg',
        foodQuantity: 1,
        Available: 0,

      },
      {
        id: 4,
        price: 200,
        name: 'Classic Burger',
        favorite: false,
        star: 4.6,
        tag: 'Veg',
        imageurl: 'assets/food4.jpg',
        foodQuantity: 1,
        Available: 0,

      },
      {
        id: 5,
        price: 240,
        name: 'Chicken Burger',
        favorite: true,
        star: 4.5,
        tag: 'Non-Veg',
        imageurl: 'assets/food5.jpg',
        foodQuantity: 1,
        Available: 0,

      },
      {
        id: 6,
        price: 180,
        name: 'French Fries',
        favorite: true,
        star: 4.5,
        tag: 'Veg',
        imageurl: 'assets/food6.jpg',
        foodQuantity: 1,
        Available: 0,

      },
      {
        id: 7,
        price: 210,
        name: 'Peri Peri French Fries',
        favorite: false,
        star: 4.5,
        tag: 'Veg',
        imageurl: 'assets/food7.jpg',
        foodQuantity: 1,
        Available: 0,

      },
      {
        id: 8,
        price: 80,
        name: 'Chocolate Cup-Cake',
        favorite: false,
        star: 4.5,
        tag: 'Veg',
        imageurl: 'assets/food8.jpg',
        foodQuantity: 1,
        Available: 0,

      }
    ]
  }
}
