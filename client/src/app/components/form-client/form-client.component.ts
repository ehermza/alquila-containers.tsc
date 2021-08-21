import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder } from '@angular/forms';

import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  @Input() IDCLIENT:string = '';
  
  cliente: any= {};
  
  constructor(private clientService:ClientService) {     
  }
  
  ngOnInit(): void {
    
    this.getClient(this.IDCLIENT);
  }

  getClient(idclient:string)
   {
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
