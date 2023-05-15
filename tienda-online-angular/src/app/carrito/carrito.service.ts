import { Injectable } from '@angular/core';
import { User } from '../signup/user';
import { Producto } from '../productos/producto';
import { Venta } from '../ventas/venta';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private url:string="http://localhost:8080/ventas"
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  cantidades:number[]=[];
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
    productos:[]
    }

  constructor(private http:HttpClient,private router:Router) { }

  setUser(user:User) {
    this.venta.comprador= user;
  }

  addCarrito(producto:Producto,cantidad:number):void {
    let bool:boolean=true;
    this.venta.productos.forEach(p => {
      if(p.id==producto.id){
        bool=!bool;
      }
    });
    if(bool){
      this.venta.productos.push(producto);
      this.cantidades.push(cantidad);
      this.venta.precioTotal=0;
    for(var a =0;a<this.cantidades.length;a++){
      this.venta.precioTotal+=this.cantidades.at(a)*this.venta.productos.at(a).precio;
    }
    console.log(this.venta);
    }
    
  }

  getVenta(){
    return this.venta;
  }

  getCantidades(){
    return this.cantidades;
  }

  create(venta:Venta):Observable<any>{
    return this.http.post<any>(this.url,venta,{headers:this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e)
        if(e.status==400){
          return throwError(()=>e);
        }
        Swal.fire('Error al crear',e.error.mensaje,'error')
        return throwError(()=>e);
      })
    )
  }
}
