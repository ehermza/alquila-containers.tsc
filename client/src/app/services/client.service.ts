import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClient(idclient: String) {
    console.log(`/api/clients/${idclient}`);
    return this.http.get(`/api/clients/${idclient}`);
  }
}
