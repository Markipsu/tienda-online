import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "../login/login.service";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class AdminGuard{
    constructor(private loginService:LoginService,private router:Router){

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.loginService.isLoggedIn()&& this.loginService.getUserRole()=='ADMIN'){
            return true;
        }
        this.router.navigate(['login'])
        return false;
    }
  }
  
  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AdminGuard).canActivate(next, state);

}