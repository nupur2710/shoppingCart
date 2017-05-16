import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/shopping.model';

export class ShoppingListSevice {
    ingredientsChanged = new EventEmitter < Ingredient[] > ();
    private ingredients: Ingredient[] = [];
    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addItem(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        // we can use the above method to add ingredients, but this method will emit a lot of events
        //we can use it too, but we can have a better approach
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}