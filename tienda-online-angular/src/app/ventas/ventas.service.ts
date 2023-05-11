import { Injectable } from '@angular/core';
import { Observable,map,of,tap,throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs';
import swal from 'sweetalert2'
import {Router} from '@angular/router'

import { formatDate } from '@angular/common';
import { Venta } from './venta';

@Injectable()
export class VentaService {
private url:string="http://localhost:8080"
private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient,private router:Router) { }


  getVentas(userId:number,page:number): Observable<any>{
    return this.http.get(this.url+"/usuarios/"+userId+"/ventas/page/"+page).pipe(
      tap((response:any) => {
        response.content as Venta[];
      }),
      map ((response:any)=>{
        (response.content as Venta[]).map(venta=>{
          venta.fechaVenta=formatDate(venta.fechaVenta,'EEEE dd-MMMM-yyyy','es-ES')
          console.log(venta)
          return venta;
        });
      return response;
      })
    );
  }

  create(venta:Venta):Observable<any>{
    return this.http.post<any>(this.url,venta,{headers:this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e)
        if(e.status==400){
          return throwError(()=>e);
        }
        swal.fire('Error al crear',e.error.mensaje,'error')
        return throwError(()=>e);
      })
    )
  }

}
