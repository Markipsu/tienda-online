import { Component, ViewChild } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Router, ActivatedRoute } from '@angular/router'
import swal from 'sweetalert2'
import { Observer } from 'rxjs';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { User } from '../signup/user';
import { LoginService } from '../login/login.service';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from './detalle/modal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class FormComponent {
  titulo: string = "Crear usuario";
  fotoSeleccionada:File;
  progreso:number;
  errores: string[] = [];
  producto:Producto={
    id: 0,
    nombre:"",
    imagen:"",
    descripcion:"",
    precio:0,
    vendedor:new User,
    cantidad:0,
  }
  date = new FormControl(moment([2017, 0, 1]));

  constructor(private productoService: ProductoService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private login:LoginService,
    private modalService:ModalService) { }

  ngOnInit() {
    this.cargarProducto();
  }

  public create(): void {
    let observer: Observer<any> = {
      next: (json) => {
        this.router.navigate(['/productos']);
        this.modalService.abrirModal();
        swal.fire('Nuevo producto', `producto ${json.producto.nombre} creado con éxito!`, 'success')
      },
      error: (err) => {
        console.log(err)
        this.errores = err.error.errors as string[];
      },
      complete: () => { }
    }
    console.log(this.login.getUser());
    console.log(localStorage.getItem('user'));
    this.producto.vendedor=this.login.getUser();
    this.productoService.create(this.producto).subscribe(observer)
  }

  cargarProducto(): void {
    this.activateRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.productoService.getProducto(id).subscribe(
            producto => this.producto = producto);
        }
      });
  }

  update(): void {
    let observer: Observer<any> = {
      next: (json) => {
        this.router.navigate(['/productos'])
        swal.fire('producto actualizado', `producto ${json.producto.nombre} actualizado con exito!`, 'success')
      },
      error: (err) => {
        this.errores = err.error.errors as string[];
      },
      complete: () => { }
    }
    this.productoService.update(this.producto).subscribe(observer)
  }


}
