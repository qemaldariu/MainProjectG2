import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  onlyOdd = false;
numbers=[0,2,3,4,5,6,7,8]
  oddnumbers =[1,3,5]
  evennumbers= [0,2,4,6]
}
