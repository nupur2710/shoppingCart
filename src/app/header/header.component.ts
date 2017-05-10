import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output() recipeClicked = new EventEmitter <{} > ();
    @Output() shoppingListClicked = new EventEmitter < {}> ();

    constructor() {}

    ngOnInit() {}

    onSelectRecipe() {
        this.recipeClicked.emit();

    }

    onSelectShoppingList() {
        this.shoppingListClicked.emit();

    }

}