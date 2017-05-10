import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    onRecipeSelected =true;

    onRecipeClicked() {
        this.onRecipeSelected = true;
    }

    onShoppingListClicked() {
        this.onRecipeSelected = false;
    }

}