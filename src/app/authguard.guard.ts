import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
//this will access pages only when this class will return true
export class AuthguardGuard implements CanActivate {

  constructor(private loginService:LoginServiceService, private route:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.loginService.isLoggedin()) {
        return true;
      }

      this.route.navigate(['']);
    return false;
  }
  
}
