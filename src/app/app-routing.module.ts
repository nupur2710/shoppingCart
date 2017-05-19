import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const appRoutes: Routes = [ //localhost:4200
    //localhost:4200/users
     {
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