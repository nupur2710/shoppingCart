import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipes/recipes.module'
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module'
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListSevice } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
import { DataStorageService } from './shared/data-storage.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        RecipesModule,
        SharedModule,
        ShoppingListModule,
        AuthModule
    ],
    providers: [ShoppingListSevice, RecipesService, DataStorageService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})

export class AppModule {}