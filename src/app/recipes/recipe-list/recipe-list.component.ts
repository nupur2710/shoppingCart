import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[];
    subscription: Subscription;

    constructor(private recipeService: RecipesService) {}

    ngOnInit() {
        this.subscription = this.recipeService.recipesChanged.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        )
        this.recipes = this.recipeService.getRecipes();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}