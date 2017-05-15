import { Component, OnInit } from '@angular/core';
import { ShoppingListSevice } from '../shopping-list.service';
import { Ingredient } from '../../shared/shopping.model';


@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


    constructor(private shoppingListService: ShoppingListSevice) {}

    ngOnInit() {}



}