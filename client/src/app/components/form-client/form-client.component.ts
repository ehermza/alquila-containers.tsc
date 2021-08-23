import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup,  FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ClientService } from 'src/app/services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  // @Input() IDCLIENT:string = '';
  @Input() CLIENT: any = {};
  idclient: string = '-1';

  urlpath: string = '';

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService,
    private http: HttpClient
  ) { }

  ngOnInit(): void 
  {
    // this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', this.CLIENT)
     this.urlpath = this.route.snapshot.pathFromRoot.toString();
     console.log(`URL SNAPSHOT:`, this.urlpath);
     return;
/*     let idByUrl = this.route.snapshot.paramMap.get("id");
    if (idByUrl != null) {
      // this.idctner = ver;  deprecated!
      this.getContainer(idByUrl);
    }
    console.log(`(PageProfile) container: ${this.container}`);

    this.http.put<any>('/api/clients/:id', this.CLIENT)
      .subscribe(data => this.idclient = data._id);
 */
  }

  /*   ngOnInit(): void {
      
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
   */
}
