import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/shopping.model';

export class ShoppingListSevice {
    ingredientsChanged = new EventEmitter < Ingredient[] > ();
    private ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 10),
        new Ingredient("Capsicum", 2)
    ];
    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addItem(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


}