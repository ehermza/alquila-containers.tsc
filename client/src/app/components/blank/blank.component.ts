import { Component, OnInit } from '@angular/core';
import { ContainersService } from '../../services/containers.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
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
