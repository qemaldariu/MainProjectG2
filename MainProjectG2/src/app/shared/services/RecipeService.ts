import {Injectable, Input} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {RecipeModel} from "../models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  url = 'http://localhost:3000/recipes';
   private dataSubject = new Subject<RecipeModel[]>();
   data$= this.dataSubject.asObservable();
  //    dollar nga pas per te kuptuar qe eshte observable
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<RecipeModel[]> {
    // let params = new HttpParams();
    // params = params.append('_page', '1');
    // params = params.append('_per_page', '10');
    return this.http.get<any>(this.url);
  }

  deleteRecipe(id: string): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }




  updateRecipe(updatedRecipe: RecipeModel): Observable<any> {
    return this.http.put(`${this.url}/${updatedRecipe.id}`, updatedRecipe);
  }
  postNewItem(name: string, description: string, imgUrl: string) {
    const newItem = {
      name: name,
      description: description,
      imgUrl: imgUrl
    };
    return this.http.post(this.url, newItem);
  }


  reloadData(){
    this.getRecipes().subscribe(data => {
      this.dataSubject.next(data);
    })
  }





}

