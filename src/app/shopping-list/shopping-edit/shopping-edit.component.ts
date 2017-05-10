import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild("amountInput") amountInput: ElementRef;
    @ViewChild("nameInput") nameInput: ElementRef;
    @Output() addInputItem = new EventEmitter < { name: string, amount: number } > ();

    constructor() {}

    ngOnInit() {}

    addItem() {
        this.addInputItem.emit({
            "name": this.nameInput.nativeElement.value,
            "amount": parseInt(this.amountInput.nativeElement.value)
        });
    }

}