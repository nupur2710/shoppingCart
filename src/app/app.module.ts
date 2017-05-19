import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module'
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListSevice } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        RecipesModule,
        SharedModule,
        ShoppingListModule
    ],
    providers: [ShoppingListSevice, RecipesService, DataStorageService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {}