import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../login/login.service";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class UserGuard{
    constructor(private loginService:LoginService,private router:Router){

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.loginService.isLoggedIn()&& this.loginService.getUserRole()=='USER'){
            return true;
        }
        this.router.navigate(['login'])
        return false;
    }
  }
  
  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(UserGuard).canActivate(next, state);

}