import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RecipeModel} from "../../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!: RecipeModel
  @Output() recipeSelected = new EventEmitter<void>();
  onItemClick() {
    this.recipeSelected.emit();
  }
}
