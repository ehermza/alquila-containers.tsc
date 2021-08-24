import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
// import { FormGroup,  FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  // @Input() IDCLIENT:string = '';
  @Input() CLIENT: any = {};

  submitted = false;
  idclient: string = '';
  // idclient: string | null = '-1';
  urlpath: string = '';

  model: Client = new Client();

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private http: HttpClient
  ) { }

  ngOnChanges(changes: SimpleChanges) 
  {
    let idstr: string = this.CLIENT._id;
    if (idstr== ''|| ! idstr) return;

    if (!this.submitted) {
      this.model.setId(this.CLIENT._id);
      this.idclient = idstr;
      this.submitted = true;
    }
    
    this.model.setAtributtes(
      this.CLIENT.name,
      this.CLIENT.telephone,
      this.CLIENT.DNI,
      this.CLIENT.business,
      true
    );

    console.log("ngOnChanges(): ", this.model);
    // let id = this.route.snapshot.paramMap.get("id");  
    // wrong! is routes contains idcontainer, not client.
  }

  ngOnInit(): void {
  }

  Enviar() {
    this.submitted = true;

    this.http.put<any>(`/api/clients/${this.idclient}`, this.model)
      .subscribe(
        data => { console.log(data) }
      );

  }
}
