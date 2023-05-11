import { Injectable } from '@angular/core';
import { User } from '../signup/user';
import { Producto } from '../productos/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 
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
  constructor() { }

  setUser(user:User) {
    this.user= user;
  }

  addCarrito(producto:Producto):void {
    let bool:boolean=true;
    this.user.carrito.forEach(p => {
      if(p.id==producto.id){
        bool=!bool;
      }
    });
    if(bool){
      this.user.carrito.push(producto);
    console.log(this.user);
    }
    
  }

  getUser(){
    return this.user;
  }
}
