import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const appRoutes: Routes = [ //localhost:4200
    //localhost:4200/users
    {
        path: 'shopping-list',
        component: ShoppingListComponent,

    }, {
        path: 'signup',
        component: SignupComponent
    }, {
        path: 'signin',
        component: SigninComponent
    }, {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full'
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