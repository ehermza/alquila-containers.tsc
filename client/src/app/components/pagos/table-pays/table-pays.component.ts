// import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';
// import { pipe } from "rxjs";
import { map } from "rxjs/operators";
import { Pago } from 'src/app/models/Pago';

import { PagoService } from 'src/app/services/pago.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-table-pays',
  templateUrl: './table-pays.component.html',
  styleUrls: ['./table-pays.component.css']
})
export class TablePaysComponent implements OnInit {

  dataSource:any = [];
  displayedColumns: string[] = ['paid_at','period','value','recibo_n', '_id'];
  emptyAlertMsg:string = "";

  constructor(
    private pagoService:PagoService, 
    public rentalService:RentalService
  ) { }

  ngOnInit(): void {
    // this.getData();
  }
  
  printdate(date:string){
    console.log(`fecha: ${date}`);
  }

  deletePayment(idpayment:string) {
    alert(`Pago: ${idpayment}, Ctner: ${this.rentalService.container}`);
    const idctner= this.rentalService.container;

    this.rentalService.deletePaymentService(idpayment, idctner)
      .subscribe(res => {
        alert(res);
      });
  }
}

function filtrar(objeto:Pago) {
  const dt= new Date(objeto.paid_at);
  console.log(dt);
  objeto.paid_str = format(dt, 'dd/MM/yyyy');
  return objeto;
}