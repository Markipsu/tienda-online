import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CarritoService } from '../carrito/carrito.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url:string="http://localhost:8080"
  constructor(private httpCliente:HttpClient) { }

  public generateToken(loginData:any){
    return this.httpCliente.post(`${this.url}/generate-token`,loginData);
  }

  public loginStatusSubject = new Subject<boolean>();

  public loginUser(token:any){
    localStorage.setItem('token',token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr= localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.httpCliente.get(`${this.url}/actual-usuario`);
  }
}
