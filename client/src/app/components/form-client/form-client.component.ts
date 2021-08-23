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


  // model = new Client(this.idByUrl, this.CLIENT.name, this.CLIENT.telephone, this.CLIENT.DNI, this.CLIENT.business, true);
  model: Client = new Client();

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private http: HttpClient
  ) { }

  setAtributtes(idByUrl: string) 
  {
    this.idclient = idByUrl;
    this.model.setId(this.idclient);
    
    this.model.setAtributtes(
      this.CLIENT.name,
      this.CLIENT.telephone,
      this.CLIENT.DNI,
      this.CLIENT.business,
      true
      );
      // this.model = this.CLIENT;
      
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges() :', changes);
    let id = this.route.snapshot.paramMap.get("id");
    this.setAtributtes((id != null) ? id : '');
  }

  ngOnInit(): void 
  {
    console.log("ONINIT(): ", this.CLIENT);
    // this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', this.CLIENT)

    /*     
        let idByUrl = this.route.snapshot.paramMap.get("id");
        if (idByUrl != null) {
          // this.idctner = ver;  deprecated!
          this.getContainer(idByUrl);
        }
        console.log(`(PageProfile) container: ${this.container}`);
    
        this.http.put<any>('/api/clients/:id', this.CLIENT)
          .subscribe(data => this.idclient = data._id);
     */
  }

  onSubmit() {
    this.submitted = true;
    let idByUrl = this.route.snapshot.paramMap.get("id");
    if (idByUrl == null) {
      // this.idctner = ver;  deprecated!
      return;
    }

    console.log('SEND DATA FORM TO UPDATE! CLIENT ID:', idByUrl);
    const ruta = `/api/clients/${idByUrl}`;

    this.http.put<Client>(ruta, this.CLIENT)
      .subscribe(data => {
        this.idclient = data._id;
        console.log(data);
      });

  }
}
