import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {UserComponent} from "./user/user.component";
import {ShopComponent} from "./shop/shop.component";
import {CartComponent} from "./cart/cart.component";
import {GoodComponent} from "./good/good.component";
import {GoodEditComponent} from "./good-edit/good-edit.component";
import {GoodsListComponent} from "./goods-list/goods-list.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {ErrorComponent} from "./error/error.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MainComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    ShopComponent,
    CartComponent,
    GoodComponent,
    GoodEditComponent,
    GoodsListComponent,
    UserEditComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PageModule { }
