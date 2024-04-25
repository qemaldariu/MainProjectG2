import { Component, Input } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import { RecipeService } from "../../../shared/services/RecipeService";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input() recipeCh!: RecipeModel;
  editMode = false;

  constructor(private recipeService: RecipeService) {}

  deleteItem() {
    this.recipeService.deleteRecipe(<string>this.recipeCh.id).subscribe(() => {
      this.recipeService.reloadData();
    });
  }

  saveChanges() {
    this.recipeService.updateRecipe(this.recipeCh).subscribe(() => {

      this.editMode = false;
      this.recipeService.reloadData();
      alert(`Recipe ${this.recipeCh.name} updated successfully` )

    });
  }
}
