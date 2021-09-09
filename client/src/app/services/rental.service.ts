import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(
    private http:HttpClient
  ) { }

  createRentalService(body:any) {
   return  this.http.post('/api/rental/', body);
  }

  createPaymentService(body:any){
    return this.http.post('/api/rental/pago/', body);
  }

}
