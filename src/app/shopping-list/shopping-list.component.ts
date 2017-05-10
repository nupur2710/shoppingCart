import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/shopping.model'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient("Tomatoes", 10),
        new Ingredient("Capsicum", 2)
    ];
    constructor() {}

    ngOnInit() {}

    addGiveItem(itemData) {
        this.ingredients.push(
            new Ingredient(itemData.name, itemData.amount)
        );
    }

}