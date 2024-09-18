import { Injectable } from '@angular/core';


import { LoginServiceService } from '../services/login-service.service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChildFn, CanActivateFn, GuardResult, MaybeAsync, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class specialGuardGuard implements CanActivate {
  constructor(private loginService: LoginServiceService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.loginService.isLogin;

  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isLogin;
  }

}


