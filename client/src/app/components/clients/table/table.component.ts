import { Component, HostBinding, OnInit } from '@angular/core';

import { ContainersService } from 'src/app/services/containers.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  // @HostBinding('class') classes = 'row';

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id_container','price_tocharge','rented_by','active', '_id'];
  dataSource: any= [];

  constructor(private gameService: ContainersService) {
  }

  ngOnInit(): void {
    this.getContainers();
    // console.log(this.dataSource);
  }
  
  getContainers() {
    this.gameService.getContainers()
    .subscribe(
      res => {
        this.dataSource = res;
        // console.log(this.games);
        },
        err => console.error(err)
      );
  }

}
