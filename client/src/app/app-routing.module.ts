import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {CartComponent} from "./pages/cart/cart.component";
import {LoginComponent} from "./pages/login/login.component";
import {SignupComponent} from "./pages/signup/signup.component";
import {ShopComponent} from "./pages/shop/shop.component";
import {UserComponent} from "./pages/user/user.component";
import {GoodsListComponent} from "./pages/goods-list/goods-list.component";
import {GoodComponent} from "./pages/good/good.component";
import {GoodEditComponent} from "./pages/good-edit/good-edit.component";
import {UserEditComponent} from "./pages/user-edit/user-edit.component";
import {ErrorComponent} from "./pages/error/error.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "login", component: LoginComponent, children: [
      {path: "admin", component: AdminComponent, canActivate: [AuthGuard]},
      {path: "user", component: UserComponent, canActivate: [AuthGuard], children: [
          {path: ":id", component: UserEditComponent}
        ]},
    ]},
  {path: "signup", component: SignupComponent, children: [
      {path: "admin", component: AdminComponent},
      {path: "user", component: UserComponent, canActivate: [AuthGuard], children: [
          {path: ":id", component: UserEditComponent}
        ]},
    ]},
  {path: "user", component: UserComponent, canActivate: [AuthGuard], children: [
      {path: ":id", component: UserEditComponent}
    ]},
  {path: "admin", component: AdminComponent, canActivate: [AuthGuard], children: [
      {path: "goods/:id/edit", component: GoodEditComponent}
    ]},
  {path: "cart", component: CartComponent},
  {path: "shop", component: ShopComponent},
  {path: "goods", component: GoodsListComponent, children: [
      {path: "good", component: GoodComponent, children: [
          {path: ":id", component: GoodEditComponent, canActivate: [AuthGuard]}
        ]}
    ]},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
