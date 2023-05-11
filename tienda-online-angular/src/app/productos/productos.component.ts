import { Component, ViewChild } from '@angular/core';
import { Producto} from './producto';
import { ProductoService } from './producto.service';
import swal from 'sweetalert2'
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from './detalle/modal.service';
import { LoginService } from '../login/login.service';
import { CarritoService } from '../carrito/carrito.service';
import { User } from '../signup/user';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  productos: Producto[] = [];
  paginator: any;
  productoSeleccionado: Producto;

  constructor(private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    public login:LoginService,
    private carritoService: CarritoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: string | null;
      let pageN: number;
      page = params.get('page');
      if (!page) {
        pageN = 0
      } else {
        pageN = +page;
      }
      this.productoService.getProductos(pageN).pipe(
        tap(response => {
          response.content as Producto[];
        })
      ).subscribe(
        response => {
          this.productos = response.content as Producto[];
          this.paginator = response;
        }
      );
    })
    this.modalService.notificarUpload.subscribe(producto => {
      this.productos = this.productos.map(productoOriginal => {
        if (producto.id == productoOriginal.id) {
          productoOriginal.imagen = producto.imagen;
        }
        return productoOriginal
      })
    })
  }

  delete(producto: Producto): void {
    swal.fire({
      title: 'Estas seguro?',
      text: `Seguro que desea eliminar el producto`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.delete(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter(usu => usu !== producto)
            swal.fire(
              'Borrado!',
              'producto borrado',
              'success'
            )
          }
        )
      }
    })
  }
  abrirModal(producto: Producto) {
    this.productoSeleccionado = producto;
    this.modalService.abrirModal();
  }


  addCarrito(producto:Producto){
    this.carritoService.addCarrito(producto);
  }
  
}
