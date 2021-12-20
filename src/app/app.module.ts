import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import {HttpClientModule} from "@angular/common/http";
import { Routes,RouterModule} from "@angular/router";
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import {LoginGuard} from "./login/login.guard";
import {LoginComponent} from "./login/login.component";
import {AccountService} from "./services/account.service";
import {AlertifyService} from "./services/alertify.service";


const routes: Routes = [
  {path:'product',
    component:ProductComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule

  ],
  providers: [
   AlertifyService,
    AccountService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
