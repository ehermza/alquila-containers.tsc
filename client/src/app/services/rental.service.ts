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
  public container:string = '';

  constructor(
    private http:HttpClient
  ) { }

  createRentalService(body:any) {
   return  this.http.post('/api/rental/', body);
  }

  createPaymentService(body:any){
    return this.http.post('/api/rental/pagos/', body);
  }

  getPaymentsByCtnerCtrl(idCtner:string)
   {
    // return this.http.get(`/api/rental/pagos/${idCtner}`);
    this.http.get(`/api/rental/pagos/${idCtner}`)
      .subscribe(
        (res)=> {
           const list:any = res;
          // this.dataSource = list.map(filtrar);
          this.pagos = list.map(formatDate);
          this.container = idCtner;
        },
        (err) => {
          this.pagos = [];
          console.log('EMPTY PAYMENT REGISTER');
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
  