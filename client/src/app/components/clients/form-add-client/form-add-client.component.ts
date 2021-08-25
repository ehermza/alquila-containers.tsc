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
  model: Contenedor = new Contenedor(true);

  constructor(
    private ctnerService: ContainersService,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getContainers();
    console.log(this.dataSource);
  }


  getContainers() {
    this.ctnerService.getContainers()
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

  obj: any = {};
  idCtner: string = '';

  addClient() {
    this.submitted = true;

    let ctnumber: Number = this.model.id_container;
    // let urlstr:string = '/api/containers/number' ;
    // urlstr += ctnumber.toString();

    this.ctnerService.getCountainerbyNumber(ctnumber)
      .subscribe(
        (data) => {
          this.obj = data;
          // this.idCtner = this.array.filter(getIdCtner);
          this.idCtner = this.obj._id;
          console.log('id container identified: ', this.idCtner);
        },
        (err) => console.log(err)
      );
  }

}
function getIdCtner(objeto: any) {
  return (objeto._id);
}

function filtrar(objeto: any) {
  return (objeto.rented_by == "");
}
