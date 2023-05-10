import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable,map,of,tap,throwError } from 'rxjs';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs';
import swal from 'sweetalert2'
import {Router} from '@angular/router'

import { formatDate } from '@angular/common';

@Injectable()
export class ProductoService {
private url:string="http://localhost:8080/productos"
private httpHeaders=new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http:HttpClient,private router:Router) { }


  getProductos(page:number): Observable<any>{
    return this.http.get(this.url+"/page/"+page).pipe(
      tap((response:any) => {
        response.content as Producto[];
      }),
      map ((response:any)=>{
        (response.content as Producto[]).map(producto=>{
          /*producto.createAt=formatDate(producto.createAt,'EEEE dd-MMMM-yyyy','es-ES')*/ 
          return producto;
        });
      return response;
      })
    );
  }

  create(producto:Producto):Observable<any>{
    return this.http.post<any>(this.url,producto,{headers:this.httpHeaders}).pipe(
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

  getProducto(id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/productos'])
        swal.fire('Error al editar',e.error.mensaje,'error')
        return throwError(()=>e);
      })
    )
  }

  update(producto:Producto):Observable<any>{
    return this.http.put<any>(`${this.url}/${producto.id}`,producto,{headers:this.httpHeaders}).pipe(
      catchError(e => {
        if(e.status==400){
          return throwError(()=>e);
        }
        swal.fire('Error al editar',e.error.mensaje,'error')
        return throwError(()=>e);
      })
    )
  }

  delete(id:number): Observable<Producto>{
    return this.http.delete<Producto>(`${this.url}/${id}`,{headers:this.httpHeaders}).pipe(
      catchError(e => {
        swal.fire('Error al eliminar',e.error.mensaje,'error')
        return throwError(()=>e);
      })
    )
  }

  subirFoto(archivo:File, id): Observable<HttpEvent<{}>>{
    let formData= new FormData();
    formData.append("archivo",archivo);
    formData.append("id",id);
    const req=new HttpRequest('POST',`${this.url}/upload`,formData,{
      reportProgress:true
    })
    return this.http.request(req);
  }
}
