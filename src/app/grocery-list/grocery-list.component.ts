import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from '../models/shopping-item';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {

  shoppingItems: ShoppingItem[];
  itemName: string;
  itemAmount: number;

  constructor() {
    this.shoppingItems = [];
    this.itemName = "";
    this.itemAmount = 0;
  }
   

  ngOnInit(): void {
  }

  addElement(event: KeyboardEvent) {
    console.log(this.itemName);
    if(event.key === 'Enter') {
      this.shoppingItems.push(new ShoppingItem(this.itemName, this.itemAmount));
      this.itemName = "";

    }
  }

  addElementOnClick() {
    this.shoppingItems.push(new ShoppingItem(this.itemName, this.itemAmount));
  }

  getStyle(item: number) {
    if(item < 3) {
      return 'even';
    } else if(item < 6 && item > 2) {
      return 'odd';
    } else {
      return 'max';
  }

}

}
