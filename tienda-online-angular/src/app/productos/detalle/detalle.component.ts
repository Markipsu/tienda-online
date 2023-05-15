import { Component, Input } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from './modal.service';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/carrito/carrito.service';
import { LoginService } from 'src/app/login/login.service';
@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  cantidad:number=1;
  @Input() producto: Producto;
  fotoSeleccionada: File;
  titulo = "Foto";
  progreso: number;
  
  constructor(private productoService: ProductoService,
            public modalService:ModalService,
            private activatedRoute:ActivatedRoute,
            private carritoService:CarritoService,
            public login:LoginService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params=>{
      let id = +params.get('id');
      if(id){
        this.productoService.getProducto(id).subscribe(producto=>{
          this.producto=producto;
        });
      }
    })
  }

  seleccionarFoto(event) {
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
    if (this.fotoSeleccionada.type.indexOf('image') < 0) {
      Swal.fire('Debe seleccionar una foto', `el archivo debe ser del tipo imagen`, 'error')
      this.fotoSeleccionada = null;
    }
  }

  subirFoto() {
    if (!this.fotoSeleccionada) {
      Swal.fire('Debe seleccionar una foto', `debe seleccionar una foto`, 'error')
    } else {
      this.productoService.subirFoto(this.fotoSeleccionada, this.producto.id).subscribe(
        producto =>{
          this.producto=producto;
          Swal.fire('La foto se ha subido Correctamente', `Todo perfecto : ${this.producto.imagen}`, 'success');
        }
      );
    }
    window.location.reload();
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada=null;
    this.progreso=0;
  }

  
  addCarrito(){
    this.carritoService.addCarrito(this.producto,this.cantidad);
  }

  
}
