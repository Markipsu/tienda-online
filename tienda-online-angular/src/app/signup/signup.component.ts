import { Component } from '@angular/core';
import { UserService } from './user.service';
import Swal from 'sweetalert2';
import { Observer } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  errores:String[]=[]

  user:User={
    nombre:"",
    email:'',
    password:'',
    direccion:'',
    ciudad:'',
    codigoPostal:0,
    pais:'',
    username:'',
  }

  constructor(private userService: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

    public create(): void {
      let observer: Observer<any> = {
        next: (json) => {
          this.router.navigate(['/login']);
          Swal.fire('Nuevo usuario', `usuario creado con éxito!`, 'success')
        },
        error: (err) => {
          console.log(err)
          this.errores = err.error.errors as string[];
        },
        complete: () => { }
      }
      this.userService.create(this.user).subscribe(observer)
    }
}
