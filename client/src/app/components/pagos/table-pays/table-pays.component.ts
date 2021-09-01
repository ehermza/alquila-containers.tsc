// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
// import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Pago } from 'src/app/models/Pago';

import { PagoService } from 'src/app/services/pago.service';


@Component({
  selector: 'app-table-pays',
  templateUrl: './table-pays.component.html',
  styleUrls: ['./table-pays.component.css']
})
export class TablePaysComponent implements OnInit {

  dataSource:any = [];
  displayedColumns: string[] = ['paid_at','client_name','value','recibo_n'];
  
  constructor(
    private pagoService:PagoService
  ) { }

  ngOnInit(): void {
    this.pagoService.getPagosAll().subscribe(
      (res)=> {
         const list:any = res;
        this.dataSource = list.map(filtrar);
      }
    );
    
  }
  
  printdate(date:string){
    console.log(`fecha: ${date}`);
  }

}

function filtrar(objeto:Pago) {
  const dt= new Date(objeto.paid_at);
  console.log(dt);
  objeto.paid_str = format(dt, 'dd/MM/yyyy');
  return objeto;
}