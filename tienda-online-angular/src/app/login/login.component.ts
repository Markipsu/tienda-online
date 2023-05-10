import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Observer } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errores: String[]=[]

  constructor(private loginService:LoginService,
    private router: Router){}

  loginData={
    "username":"",
    "password":""
  }

  public login(): void {
    let observer: Observer<any> = {
      next: (json) => {
        Swal.fire('Usuario logueado', `usuario logueado con éxito!`, 'success')
        this.loginService.loginUser(json.token);
        this.loginService.getCurrentUser().subscribe(user=>{
          this.loginService.setUser(user);
          console.log(user)
          if(this.loginService.getUserRole()=='ADMIN'){
            window.location.href = '/admin';
            this.loginService.loginStatusSubject.next(true);
          }else if(this.loginService.getUserRole()=='USER'){
            window.location.href = '/user-dashboard';
            this.loginService.loginStatusSubject.next(true);
          }else{
            this.loginService.logout();
          }
        })
      },
      error: (err) => {
        console.log(err);
        Swal.fire('Detalles inválidos, vuelva a intentarlo','Username o contraseña incorrecta','error')
      },
      complete: () => { }
    }
    this.loginService.generateToken(this.loginData).subscribe(observer)
  }
}
