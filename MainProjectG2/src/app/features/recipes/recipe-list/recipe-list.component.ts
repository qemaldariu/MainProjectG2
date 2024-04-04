import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {RecipeModel} from "../../../shared/models/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  implements OnInit {


  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
@ViewChild('inputElement') input:any;

ngOnInit() {
  console.log('initialized')
}


  recipes: RecipeModel[] = [
    {name: 'Recipe One', description: 'Some description for Recipe One', imgUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'},
    {name: 'Tave dheu', description: 'Nga kuzhinat më të vjetra të shtëpive përdhese, të gatuara në zjarrin e oxhakut e deri sot në restorantet më prestigjiozë, Tava e Dheut vijon të ruajë traditën e shijes së mirë shqiptare.', imgUrl: 'https://agroweb.org/wp-content/uploads/2020/06/tave-dheuuuu-1024x576.jpg'}
    ,{name:'Mish vici me domate',description:'Përsa i përket mishit të kuq më të preferuarit në kuzhinën shqiptare janë padyshim dy, ai i viçit dhe i qingjit.\n' +
        '\n' +
        'Janë dy produkte që gjenden shpesh të përgatitura në mënyra të ndryshme në çdo zonë.\n' +
        '\n' +
        'Pjekja e mishit e sidmos atij të qingjit është një nga traditat më të hershme dhe të njohura të vendit tonë.',imgUrl:'https://agroweb.org/wp-content/uploads/2019/04/mishmedomateok-1024x576.jpg'}
  ];

  onSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe)
  }
//   inputChange(event: any){
// console.log(event.value)
//   }
  add(input:HTMLInputElement){
    // console.log(input.value)
console.log(this.input.nativeElement.value)
  }

}
