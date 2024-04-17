import { Component } from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";
import {LoggingService} from "../../shared/services/logging.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  constructor(private logging: LoggingService) {
    // console.log('RecipesComponent constructor');
    // console.log(this.logging.getStatus())
    // this.logging.setStatus('RecipesComponent')
    // console.log(this.logging.getStatus())
  }

  recipe!: RecipeModel
}
