import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [ //localhost:4200
    //localhost:4200/users
    {
        path: 'shopping-list',
        component: ShoppingListComponent,

    }, {
        path:"recipes",
        loadChildren:"./recipes/recipes.module#RecipesModule"
    }, {
        path: '',
        component: HomeComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}