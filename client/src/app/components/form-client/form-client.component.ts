import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
// import { FormGroup,  FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/Client';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  @Input() CLIENT: any = {};

  submitted = false;
  idclient: string = '';
  urlpath: string = '';

  model: Client = new Client();

  constructor(
    // private route: ActivatedRoute,
    private router:Router,
    private clientService: ClientService,
    private http: HttpClient
  ) { }

  formClient = new FormGroup({
    name:new FormControl('',Validators.required), 
    telephone: new FormControl(),
    business: new FormControl(),
    pagos_total: new FormControl(),
    saldo_act: new FormControl(),
  });

  getSaldoActual():number
  {
     /**
      * deprecated! urgent to correct, 
      * este dato deberia obtenerse from Rental model
      */
    const {pagos_total, deuda_total} = this.CLIENT;
    // console.log('get current by client-form: ', this.model) 
    const difer = pagos_total - deuda_total;
    console.log(`get saldo actual: ${difer} `);
    return difer;
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    let idstr: string = this.CLIENT._id;
    if (idstr== ''|| ! idstr) return;

    if (!this.submitted) {
      this.submitted = true;
      // this.model.setId(this.CLIENT._id);
      this.idclient = idstr;
      
    }
    this.model = this.CLIENT;
    // this.formClient.   // continue..!
    // console.log("ngOnChanges(): ", this.model);
  }

  ngOnInit(): void {
  }

  Enviar() {
    this.submitted = true;

    this.http.put<any>(`/api/clients/${this.idclient}`, this.model)
      .subscribe(
        data => { console.log(data) }
      );
      this.router.navigate(['/clients/alert/200']);
  }
}
