import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
    editedItem: Ingredient;
    @ViewChild('f') shoppingListForm: NgForm;

    constructor(private shoppingListService: ShoppingListSevice) {}

    ngOnInit() {
        this.subscription = this.shoppingListService.startedEditing
            .subscribe(
                (index: number) => {
                    this.editMode = true;
                    this.editedItemIndex = index;
                    this.editedItem = this.shoppingListService.getIngredient(index);
                    this.shoppingListForm.setValue({
                        'name': this.editedItem.name,
                        'amount': this.editedItem.amount
                    })
                }
            );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name, value.amount);
        if (this.editMode) {
            this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);

        } else {
            this.shoppingListService.addItem(newIngredient);
        }
        this.onClear();
    }

    onClear() {
        this.editMode = false;
        this.shoppingListForm.reset();
    }

    onDelete() {
        this.shoppingListService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }

}