import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg'),
    new Recipe('Another Test Recipe',
    'This is simply a test',
    'http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg')
  ];

  getRecipes() : Recipe[] {
      return this.recipes.slice();
  }

}