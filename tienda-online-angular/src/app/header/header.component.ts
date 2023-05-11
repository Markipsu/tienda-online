import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../signup/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user:User;
constructor(public loginService:LoginService){

}

  public logout(){
    this.loginService.logout();
    window.location.reload();
  }
}
