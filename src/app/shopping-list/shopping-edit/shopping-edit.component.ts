import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ShoppingListSevice } from '../shopping-list.service';
import { Ingredient } from '../../shared/shopping.model';


@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    // @ViewChild('f')
    constructor(private shoppingListService: ShoppingListSevice) {}

    ngOnInit() {}

    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        this.shoppingListService.addItem(newIngredient);
    }

}