import { Component, ViewChild } from '@angular/core';

import swal from 'sweetalert2'
import { tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Venta } from './venta';
import { VentaService } from './ventas.service';
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  ventas: Venta[] = [];
  paginator: any;

  constructor(
    private ventaService: VentaService,
    private activatedRoute: ActivatedRoute,
    public login:LoginService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let page: string | null;
      let pageN: number;
      let userId:number = +params.get('id');
      page = params.get('page');
      if (!page) {
        pageN = 0
      } else {
        pageN = +page;
      }
      this.ventaService.getVentas(userId,pageN).pipe(
        tap(response => {
          response.content as Venta[];
        })
      ).subscribe(
        response => {
          this.ventas = response.content as Venta[];
          this.paginator = response;
        }
      );
    })
  }

  
}
