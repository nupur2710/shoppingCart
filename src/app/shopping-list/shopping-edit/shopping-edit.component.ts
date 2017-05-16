import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListSevice } from '../shopping-list.service';
import { Ingredient } from '../../shared/shopping.model';
import { Subscription } from 'rxjs/subscription';


@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    subscription: Subscription;
    editMode = false;
    editedItemIndex: number;

    constructor(private shoppingListService: ShoppingListSevice) {}

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing
            .subscribe(
                (index: number) => {
                    this.editMode = true;
                    this.editedItemIndex = index;
                }
            );

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        this.shoppingListService.addItem(newIngredient);
    }

}