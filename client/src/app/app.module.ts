import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { GoodComponent } from './pages/good/good.component';
import { GoodEditComponent } from './pages/good-edit/good-edit.component';
import { GoodsListComponent } from './pages/goods-list/goods-list.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
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
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
