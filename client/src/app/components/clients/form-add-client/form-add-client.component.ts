import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contenedor } from 'src/app/models/Contenedor';
import { ContainersService } from '../../../services/containers.service';



@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.css']
})

export class FormAddClientComponent implements OnInit {

  list: any = [];
  dataSource: any = [];

  submitted = false;
  model: Contenedor = new Contenedor();

  constructor(
    private gameService: ContainersService,
    private http:HttpClient
    ) {
  }

  ngOnInit(): void {
    this.getContainers();
    console.log(this.dataSource);
  }


  getContainers() {
    this.gameService.getContainers()
      .subscribe(
        res => {
          this.list = res;
          this.dataSource = this.list.filter(filtrar);
          // console.log(this.games);
        },
        err => {
          console.error(err)
        }
      );
  }

  addClient() {
    this.submitted = true;
    this.http.post<any>('/api/containers/', this.model)
      .subscribe(
      (data) => { console.log('addClient() to database', data); 
    });
  }
  
}

function filtrar(objeto: any) {
  return (objeto.rented_by == "");
}
