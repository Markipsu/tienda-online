import { Injectable } from '@angular/core';
import { User } from '../signup/user';
import { Producto } from '../productos/producto';
import { Venta } from '../ventas/venta';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 
  venta:Venta={
    id:0,
    fechaVenta:"",
    precioTotal:0,
    cantidadProductos:0,
    comprador:{
      id:0,
      nombre:"",
      email:'',
      password:'',
      direccion:'',
      ciudad:'',
      codigoPostal:0,
      pais:'',
      username:'',
    },
    productos:[],
    vendedores:[]
    }

  constructor() { }

  setUser(user:User) {
    this.venta.comprador= user;
  }

  addCarrito(producto:Producto):void {
    let bool:boolean=true;
    this.venta.productos.forEach(p => {
      if(p.id==producto.id){
        bool=!bool;
      }
    });
    if(bool){
      this.venta.productos.push(producto);
      this.venta.vendedores.push(producto.vendedor);
    console.log(this.venta);
    }
    
  }

  getVenta(){
    return this.venta;
  }
}
