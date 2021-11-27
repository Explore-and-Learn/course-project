import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
      new Recipe('A Test Recipe',
          'This is simply a test',
          'http://foodjaunts.com/wp-content/uploads/2012/05/Hawaiian-Fish-Pasta-Overview.jpg',
          [
              new Ingredient('meat', 1),
              new Ingredient('french fries', 20)
          ]),
      new Recipe('Cherry Canapes',
          'Dessert for a fancy dinner',
          'https://libreshot.com/wp-content/uploads/2015/11/canapes.jpg',
          [
              new Ingredient('cherries', 3),
              new Ingredient('flour', 2.5),
              new Ingredient('sugar', 1),
              new Ingredient('baking soda', 2.3)
          ])
  ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(index: number): Recipe {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.AddIngredients(ingredients);
    }

}
