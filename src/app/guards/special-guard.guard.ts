import { Injectable } from '@angular/core';


import { LoginServiceService } from '../services/login-service.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class specialGuardGuard implements CanActivate {
  constructor(private loginService: LoginServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.loginService.isLogin;

  }



}


