import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListSevice } from '../shopping-list.service';
import { Ingredient } from '../../shared/shopping.model';


@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild("amountInput") amountInput: ElementRef;
    @ViewChild("nameInput") nameInput: ElementRef;

    constructor(private shoppingListService: ShoppingListSevice) {}

    ngOnInit() {}

    addItem() {
        const ingName = this.nameInput.nativeElement.value;
        const ingAmt = parseInt(this.amountInput.nativeElement.value);
        const newIngredient = new Ingredient(ingName, ingAmt);
        this.shoppingListService.addItem(newIngredient);
    }

}