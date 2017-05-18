import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [ //localhost:4200
    {
        path: 'recipes',
        component: RecipesComponent,
        children: [{
            path: '',
            component: RecipeStartComponent
        }, {
            path: 'new',
            component: RecipeEditComponent,
            canActivate: [AuthGuard]
        }, {
            path: ':id',
            component: RecipeDetailComponent
        }, {
            path: ':id/edit',
            component: RecipeEditComponent,
            canActivate: [AuthGuard]
        }]

    }, //localhost:4200/users
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