import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [ //localhost:4200
    {
        path: 'recipes',
        component: RecipesComponent,

    }, //localhost:4200/users
    {
        path: 'shopping-list',
        component: ShoppingListComponent,

    }, {
        path: '',
        redirectTo: '/recipes',
        pathMatch:'full'
    },

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