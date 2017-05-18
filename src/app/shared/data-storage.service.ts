import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

    constructor(private http: Http, private recipeService: RecipesService) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put("https://ng-recipe-book-14c67.firebaseio.com/recipes.json", recipes);
    }

    fetchRecipes() {
        this.http.get("https://ng-recipe-book-14c67.firebaseio.com/recipes.json")
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for (let recipe of recipes) {
                        if (!recipe['ingredients']) {
                            recipe['ingredients'] = [];
                        }
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);
                }
            );
    }
}