import { Component } from '@angular/core';
import { User } from '../signup/user';
import { CarritoService } from './carrito.service';
import { LoginService } from '../login/login.service';
import { Venta } from '../ventas/venta';
import { Producto } from '../productos/producto';
import { ProductoService } from '../productos/producto.service';
import { Observer } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  cantidades:number[];
  venta:Venta={
    id:0,
    fechaVenta:"",
    precioTotal:0,
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
    }

  constructor(private carritoService:CarritoService,
    private login:LoginService,
    private productoService:ProductoService,
    private router:Router){}

  ngOnInit(){
    this.venta=this.carritoService.getVenta();
    this.venta.comprador=this.login.getUser();
    this.cantidades=this.carritoService.getCantidades();
    console.log(this.venta)
  }
  
  calcular(producto:Producto){
    this.venta.precioTotal=0;
    for(var a =0;a<this.cantidades.length;a++){
      this.venta.precioTotal+=this.cantidades.at(a)*this.venta.productos.at(a).precio;
    }
    
  }

  eliminarProducto(producto:Producto){
    this.venta.productos.splice(this.venta.productos.indexOf(producto),1);
  }

  public create(): void {
    let observer: Observer<any> = {
      next: (json) => {
        this.router.navigate(['/productos']);
        Swal.fire('Compra realizada', `compra realizada con éxito!`, 'success')
      },
      error: (err) => {
        console.log(err)
        
      },
      complete: () => { }
    }
    this.carritoService.create(this.venta).subscribe(observer)
    this.venta={
      id:0,
      fechaVenta:"",
      precioTotal:0,
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
      productos:[]
      }
  }

}
