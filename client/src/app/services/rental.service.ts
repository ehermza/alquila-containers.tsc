import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';

import { RgtPago } from '../models/Rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService 
{
  public pagos:RgtPago[] = [];
  public container:string = "";
  public blEmptyTable:string = "";

  constructor(
    private http:HttpClient
  ) { }

  createRentalService(body:any) {
   return  this.http.post('/api/rental/', body);
  }

  createPaymentService(body:any){
    return this.http.post('/api/rental/pagos/', body);
  }

  getSaldoActual(idCtner:string)  {
   return this.http.get<any>(`/api/rental/saldo/${ idCtner }`);
  }

  getPaymentsByCtnerCtrl(idCtner:string)
   {
    // return this.http.get(`/api/rental/pagos/${idCtner}`);
    this.http.get(`/api/rental/pagos/${idCtner}`)
      .subscribe(
        (res)=> {
          console.log(res);
           const list:any = res;
          /**
           * this.pagos set from form-add-pay then, is reading for table-pays */
          this.pagos = list.map(formatDate);    
          this.blEmptyTable = (!this.pagos.length)? "Not Payments": "";
          this.container = idCtner;
        },
        (err) => {
          this.pagos = [];
          console.log('Failure to try get payments!');
        }
  
      );            
  }
}

function formatDate(objeto:any)
   {
    const dt= new Date(objeto.paid_at);
    console.log(dt);
    objeto.paid_str = format(dt, 'dd/MM/yyyy');
    return objeto;
  }
  