import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  cliente: any= {};

  constructor(private clientService:ClientService) {     
  }

  ngOnInit(): void {
    this.getClient('6109dc44cb91910827528f5c');
  }

  getClient(idclient:String) {
    this.clientService.getClient(idclient)
      .subscribe (
         (res) => {
          this.cliente = res;
			 console.log(this.cliente);
        },
         (err) => {
          console.error(err);
        }
      );
  }

}
