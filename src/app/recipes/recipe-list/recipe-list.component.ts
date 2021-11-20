import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg'),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg')
  ];

  @Output() pushSelectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedRecipe(selectedRecipe: Recipe){
    this.pushSelectedRecipe.emit(selectedRecipe);
  }

}
