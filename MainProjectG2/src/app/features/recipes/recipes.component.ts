import { Component } from '@angular/core';
import {RecipeModel} from "../../shared/models/recipe.model";
import {LoggingService} from "../../shared/services/logging.service";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../../shared/services/RecipeService";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  name: string = '';
  desc: string= '';
  imgUrl: string = '';


  constructor(
    private logging: LoggingService,
    private http: HttpClient,
    private recipeService:RecipeService
    ) {
    // console.log('RecipesComponent constructor');
    // console.log(this.logging.getStatus())
    // this.logging.setStatus('RecipesComponent')
    // console.log(this.logging.getStatus())
  }
  url = 'http://localhost:3000/recipes'

  recipe!: RecipeModel

  recipes!: RecipeModel[]


postNewItem(){
    this.recipeService.postNewItem(this.name,this.desc,this.imgUrl).subscribe(data =>{
      this.recipeService.reloadData()

  })

}
}
