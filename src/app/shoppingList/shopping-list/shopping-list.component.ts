import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../modules/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Ground beef', 500),
    new Ingredient('Onions', 1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
