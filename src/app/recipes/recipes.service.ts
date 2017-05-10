import { EventEmitter } from '@angular/core'
import { Recipe } from './recipe.model';

export class RecipesService {
    recipeSelected = new EventEmitter < Recipe > ();

    private recipes: Recipe[] = [
        new Recipe("My first test recipe", "This is the description of my first recipe", "http://www.tasty-indian-recipes.com/wp-content/uploads/2013/10/Jain-Pav-Bhaji-Recipe.jpg"),
        new Recipe("My second test recipe", "This is the description of my first recipe", "http://img1.rnkr-static.com/list_img_v2/3221/2263221/full/new-fast-food-items-2016-u3.jpg")
    ];


    getRecipes() {
        return this.recipes.slice();
        //slice will return a new array, which is the exact copy of the original array
        //ideally, only passing this.recipes points to the original recipes array
        //changing it from outside, will change it in the service also
    }
}