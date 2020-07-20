import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { Recipe } from '../recipe.model';
import {  } from 'protractor';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected =new EventEmitter<Recipe>();
  recipies : Recipe[]= [
    new Recipe('Recipe_A','This is the first recipe',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(62).jpg'),
    new Recipe('Recipe_B','This is the second recipe',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg'),
    new Recipe('Recipe_C','This is the third recipe',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(93).jpg'),
    new Recipe('Recipe_D','This is the third recipe',
    'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(95).jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe : Recipe){
this.recipeWasSelected.emit(recipe);
  }
}
