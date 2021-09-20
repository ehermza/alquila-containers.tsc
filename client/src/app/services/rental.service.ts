import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';

import { IRental, Rental, RgtPago } from '../models/Rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService
 {
  public alquiler:IRental = {    
    id_client: '', 
    id_container: '',
    active: false,
    date_init: new Date,
    date_final: new Date,
    deuda_total: -1,
    deuda_register: [],
    pagos_total: -1,
    pagos_register: []
    
  } ;
  public pagos: RgtPago[] = [];
  public container: string = "";
  public blEmptyTable: string = "";

  constructor(
    private http: HttpClient
  ) { }

  createRentalService(body: any) {
    return this.http.post('/api/rental/', body);
  }

  createPaymentService(body: any) {
    return this.http.post('/api/rental/pagos/', body);
  }

  getRentalByCtner(idctner:string) {
    /**
     * Action: Get one Rental active Object by Container Number
     * Date: 19 Sept, 2021 Author: EHER
     */
      this.http.get(`/api/rental/container/${idctner}`)
        .subscribe( (res)=> {
          const obj: any = res;
          if(!obj) {
            return;
          }
          this.alquiler = obj;
          this.pagos = this.alquiler.pagos_register.map(formatDate);
          this.blEmptyTable = (!this.pagos.length) ? "Not Payments" : "";
          this.container = idctner;

        });
    // return this.http.get(`/api/rental/container/${idctner}`);
  }
  
  deletePaymentService(recibo: string, idctner: string)  {
     /**
      * Action: Delete Payment by id Container
      * @param body Recibo Number, idConteiner
      * @returns Rental object 
      */
    const body: any = { recibo, idctner }
    // console.log(body);
    return this.http.delete<Rental>(`/api/rental/pagos/${recibo}&${idctner}`);
  }

  getSaldoActual(idCtner: string) {
    /** 
     * deprecated! */
    return this.http.get<any>(`/api/rental/saldo/${idCtner}`);
  }

/*   
  getPaymentsByCtnerCtrl(idCtner: string) {
    // return this.http.get(`/api/rental/pagos/${idCtner}`);
    this.http.get(`/api/rental/pagos/${idCtner}`)
      .subscribe(
        (res) => {
          console.log(res);
          const list: any = res;
          this.pagos = list.map(formatDate);
          this.blEmptyTable = (!this.pagos.length) ? "Not Payments" : "";
          this.container = idCtner;
        },
        (err) => {
          this.pagos = [];
          console.log('Failure to try get payments!');
        }

      );
  }
 */
}

function formatDate(objeto: any) {
  const dt = new Date(objeto.paid_at);
  console.log(dt);
  objeto.paid_str = format(dt, 'dd/MM/yyyy');
  return objeto;
}
