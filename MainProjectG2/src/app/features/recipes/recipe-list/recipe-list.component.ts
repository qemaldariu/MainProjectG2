import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import {RecipeService} from "../../../shared/services/RecipeService";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.data$.subscribe(data => {
      this.recipes=data;
    });
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }


  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
