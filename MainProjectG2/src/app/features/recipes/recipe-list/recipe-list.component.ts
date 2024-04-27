import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../../../shared/models/recipe.model';
import {RecipeService} from "../../../shared/services/RecipeService";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  url = 'http://localhost:3000/recipes'


  constructor(private recipeService: RecipeService,
              private http: HttpClient,
  ) {}

  ngOnInit() {
    this.recipeService.data$.subscribe(data => {
      this.recipes=data;
    });
    this.getRecipes();
    this.paginate();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }



  paginate() {
    let params = new HttpParams();
    params = params.append('_page', this.currentPage)
    params = params.append('_per_page', this.itemsPerPage)
    this.http.get<any>(this.url, {
      params: params
    }).subscribe( data => {
      this.recipes = data.data;
    })
  }
  backward() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  forward() {
    this.currentPage++;
    this.paginate();
  }



  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
