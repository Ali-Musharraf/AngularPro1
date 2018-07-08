import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe1','This is simply a test','http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg'),
    new Recipe('A Test Recipe2','This is another a test','http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg')
  ];
  @Output() recipeWasSelected=new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
