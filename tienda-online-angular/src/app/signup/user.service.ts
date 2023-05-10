import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://localhost:8080/usuarios"
  constructor(private http:HttpClient) { }

  public create(user:any){
    return this.http.post(this.url,user);
  }
}
