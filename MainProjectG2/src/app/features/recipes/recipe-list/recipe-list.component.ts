import {Component, EventEmitter, Output} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();

  recipes: RecipeModel[] = [
    {name: 'Recipe One', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Recipe Two', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'}
  ];

  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }
}
