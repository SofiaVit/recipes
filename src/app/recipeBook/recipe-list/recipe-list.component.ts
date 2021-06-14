import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from "../../modules/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Bulochki', 'Buns with meat', '../../../assets/bulochki.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipeEl: Recipe) {
    this.recipeClicked.emit(recipeEl);
  }
}
