import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { User } from '../signup/user';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user:User={
    id:0,
    nombre:"",
    email:'',
    password:'',
    direccion:'',
    ciudad:'',
    codigoPostal:0,
    pais:'',
    username:'',
  }

constructor(public loginService:LoginService,
  private router:Router,
  private carritoService:CarritoService){
}

  ngOnInit(){
    if(this.loginService.isLoggedIn()){
      this.user=this.loginService.getUser();
    }else{
      console.log("B")
    }
  }

  public carrito(){
    this.router.navigate(['/usuarios/',this.user.id,'carrito'])
  }

  public logout(){
    this.loginService.logout();
    this.router.navigate(['/'])
  }
}
