import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe : Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
