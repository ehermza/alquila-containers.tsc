import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Container } from '../models/container';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  // API_URI = 'http://localhost:5300/api';

  constructor(private http: HttpClient) { }

  /*   getGames() {
      return this.http.get(`${this.API_URI}/games`);
    }
   */
  getContainers() {
    // return this.http.get(`${this.API_URI}/containers`);
    return this.http.get(`/api/containers`);
  }
}
