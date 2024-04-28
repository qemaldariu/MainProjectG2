import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeService } from "../../../shared/services/RecipeService";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  alert:boolean=false;

  @Input() recipeCh!: RecipeModel;

  constructor(private recipeService: RecipeService) {}

  deleteItem() {
    this.recipeService.deleteRecipe(<string>this.recipeCh.id).subscribe(() => {
      this.recipeService.reloadData();
    });
  }

  saveChanges() {
    this.recipeService.updateRecipe(this.recipeCh).subscribe(() => {

      this.recipeService.reloadData();
      this.alert=true;
    });
  }
  closeAlert(){
    this.alert=false;
  }
}
