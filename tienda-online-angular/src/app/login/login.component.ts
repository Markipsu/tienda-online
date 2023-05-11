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
        this.loginService.loginUser(json.token);
        this.loginService.getCurrentUser().subscribe(user=>{
          this.loginService.setUser(user);
          console.log(user)
          if(this.loginService.getUserRole()=='ADMIN'){
            this.router.navigate(['/admin']);
            this.loginService.loginStatusSubject.next(true);
            Swal.fire('Usuario logueado', `usuario logueado con éxito!`, 'success')
          }else if(this.loginService.getUserRole()=='USER'){
            this.router.navigate(['/user-dashboard']);
            this.loginService.loginStatusSubject.next(true);
            Swal.fire('Usuario logueado', `usuario logueado con éxito!`, 'success')
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
