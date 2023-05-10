import { Component, Input } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import Swal from 'sweetalert2';
import { HttpEventType } from '@angular/common/http';
import { ModalService } from './modal.service';
@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Input() producto: Producto;
  fotoSeleccionada: File;
  titulo = "Foto";
  progreso: number;
  constructor(private productoService: ProductoService,
            public modalService:ModalService) {
  }

  ngOnInit() {
    
  }

  /*seleccionarFoto(event) {
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
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progreso = Math.round((event.loaded / event.total) * 100);
          } else if (event.type === HttpEventType.Response) {
            let response: any = event.body;
            this.producto = response.producto as Producto;
            this.modalService.notificarUpload.emit(this.producto);
            Swal.fire('La foto se ha subido correctamente', response.mensaje, 'success');
          }
        }
      );
    }
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada=null;
    this.progreso=0;
  }*/
}
