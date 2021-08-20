import { Component, OnInit } from '@angular/core';
import { ContainersService } from '../../../services/containers.service';


@Component({
  selector: 'app-form-add-client',
  templateUrl: './form-add-client.component.html',
  styleUrls: ['./form-add-client.component.css']
})

export class FormAddClientComponent implements OnInit {
  list: any = [];
  dataSource: any = [];

  constructor(private gameService: ContainersService) {
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
  
}

function filtrar(objeto: any) {
  return (objeto.rented_by == "");
}

/* export class FormAddClientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
 */