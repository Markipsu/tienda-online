import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'paginator-nav',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() paginator: any;

  paginas: number[] = [];

  desde: number = 0;

  hasta: number = 0;

  ngOnInit() {
    this.initPaginator();
  }

  ngOnChanges(changes:SimpleChanges){
    let paginadorActualizado= changes['paginator'];
    if(paginadorActualizado.previousValue){
      this.initPaginator();
    }
  }

  private initPaginator():void{
    this.desde = Math.min(Math.max(1, this.paginator.number - 1), this.paginator.totalPages - 4);
    this.hasta = Math.max(Math.min(this.paginator.totalPages, this.paginator.number + 3), 5);
    if (this.paginator.totalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map((_valor, indice) => indice + this.desde);
    } else
      this.paginas = new Array(this.paginator.totalPages).fill(0).map((_valor, indice) => indice + 1);
  }
}
