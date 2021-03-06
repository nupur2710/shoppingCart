import { Ingredient } from '../shared/shopping.model';
import { Subject } from 'rxjs/Subject'

export class ShoppingListSevice {
    ingredientsChanged = new Subject < Ingredient[] > ();
    startedEditing = new Subject < number > ();
    private ingredients: Ingredient[] = [{
        'name': "milk",
        'amount': 2
    }, {
        'name': "corn",
        'amount': 10
    }, {
        'name': "peas",
        'amount': 20
    }];
    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addItem(ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        // we can use the above method to add ingredients, but this method will emit a lot of events
        //we can use it too, but we can have a better approach
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}