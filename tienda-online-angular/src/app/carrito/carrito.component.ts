import { Component } from '@angular/core';
import { User } from '../signup/user';
import { CarritoService } from './carrito.service';
import { LoginService } from '../login/login.service';
import { Venta } from '../ventas/venta';
import { Producto } from '../productos/producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

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

  constructor(private carritoService:CarritoService,
    private login:LoginService){}

  ngOnInit(){
    this.venta=this.carritoService.getVenta();
    this.venta.comprador.id=this.login.getUser().id;
    console.log(this.venta)
  }
  
  calcular(producto:Producto){
    console.log("T")
  }
}
