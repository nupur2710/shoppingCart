import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipesService } from './recipes.service'

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

    @Input() singleRecipe: Recipe;

    constructor() {}

    ngOnInit() {}

    viewSingleRecipe(recipeData) {
        this.singleRecipe = recipeData;
    }

}