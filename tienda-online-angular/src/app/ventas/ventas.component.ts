import { Component, ViewChild } from '@angular/core';

import swal from 'sweetalert2'
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Venta } from './venta';
import { VentaService } from './ventas.service';
import { Producto } from '../productos/producto';
import { ModalService } from '../productos/detalle/modal.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  ventas: Venta[] = [];
  productoSeleccionado: Producto;


  constructor(
    private ventaService: VentaService,
    private activatedRoute: ActivatedRoute,
    public login:LoginService,
    private modalService:ModalService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let userId:number = +params.get('id');

      this.ventaService.getVentas(userId).subscribe(
        response => {
          this.ventas = response as Venta[];
        }
      );
    })
  }
  abrirModal(producto: Producto) {
    console.log(producto.id)
    this.productoSeleccionado = producto;
    this.modalService.abrirModal();
  }
  
}
