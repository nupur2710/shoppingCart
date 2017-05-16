import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;
    constructor(private recipeService: RecipesService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipeById(this.id);
            }
        )
    }

    addToShoppingList() {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
    }

    deleteRecipe() {
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes'], { relativeTo: this.route });
    }

}