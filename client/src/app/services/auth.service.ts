import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor(private router: Router) { }

  login() {
    this.isAuth = true;
    this.router.navigate(['/admin'])
  }

  logout() {
    this.isAuth = false;
    this.router.navigate(['/login'])
  }

  signup() {
    this.isAuth = true;
    this.router.navigate(['/admin'])
  }

  isAuthenticated(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        return resolve(this.isAuth)
      }, 1500)
    })
  }
}
