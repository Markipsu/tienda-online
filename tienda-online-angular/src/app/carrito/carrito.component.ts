import { Component } from '@angular/core';
import { User } from '../signup/user';
import { CarritoService } from './carrito.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

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
    carrito:[]
  }

  constructor(private carritoService:CarritoService,
    private login:LoginService){}

  ngOnInit(){
    this.user=this.carritoService.getUser();
    this.user.id=this.login.getUser().id;
    console.log(this.user)
  }
}
