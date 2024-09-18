import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isLogin: boolean = false;

  logIn() {
    this.isLogin = true;
  }

  logOut() {
    this.isLogin = false;
  }
}
