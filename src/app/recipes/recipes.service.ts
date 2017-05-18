import { EventEmitter, Injectable } from '@angular/core'
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/shopping.model';
import { ShoppingListSevice } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipesService {

    recipesChanged = new Subject < Recipe[] > ();
    private recipes: Recipe[] = [
        new Recipe("Pav Bhaji", "This is the recipe of pav bhaji", "http://www.tasty-indian-recipes.com/wp-content/uploads/2013/10/Jain-Pav-Bhaji-Recipe.jpg", [
            new Ingredient('tomatoes', 5),
            new Ingredient('capsicum', 3),
            new Ingredient('bread', 2)
        ]),
        new Recipe("Frankie", "This is the description frankie recipe", "http://img1.rnkr-static.com/list_img_v2/3221/2263221/full/new-fast-food-items-2016-u3.jpg", [
            new Ingredient('potatoes', 5),
            new Ingredient('cucumber', 3),
            new Ingredient('bread', 2)
        ])
    ];

    constructor(private shoppingListService: ShoppingListSevice) {

    }

    getRecipes() {
        return this.recipes.slice();
        //slice will return a new array, which is the exact copy of the original array
        //ideally, only passing this.recipes points to the original recipes array
        //changing it from outside, will change it in the service also
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredient);
    }

    getRecipeById(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}