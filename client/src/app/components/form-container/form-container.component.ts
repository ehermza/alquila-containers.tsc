import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Contenedor } from 'src/app/models/Contenedor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})

export class FormContainerComponent implements OnInit {

  @Input() CONTAINER: any= {};

    idCtner:string= '';
    model:Contenedor = new Contenedor(true);
    submitted = false;

    constructor(
      private http:HttpClient,
      private router:Router
      ) { }
  
    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges)  
    {
      this.idCtner = this.CONTAINER._id;
      console.log(`(formContainer) CONTAINER.get() `, this.CONTAINER);
      this.model = this.CONTAINER;
      
/*       this.model.setId(this.CONTAINER._id);
      this.model.setAtributtes(
        this.CONTAINER.id_container,
        this.CONTAINER.price_tocharge,
        this.CONTAINER.rented_by
      );
 */    }

    unlinkClient() 
    {
      this.submitted = true;
      const msj = `Seguro quieres devincular al cliente  ${this.model.rented_by} del Contenedor ${this.model.id_container}`;
      if (!confirm(msj)) {
        return;
      }
      this.model.Unlinked();

      // touch backend! router.get('/containers/unlink/:idcont', async function (req, res) 
      this.http.put<any>(`/api/containers/${this.idCtner}`, this.model)
        .subscribe(
          data => { console.log('(unlinkClient) Subscribe: ', data); }
        );
    }

    alertar(state:number) {
      this.router.navigate([`clients/alert/${state}`]);

    }

    updatePrice()
    {
      if(this.submitted){
        /** 
         * unlinked clicked */
        this.submitted= false;
        return;
      } 
      this.submitted = true;

      this.http.put<any>(`/api/containers/${this.idCtner}`, this.model)
        .subscribe(
          res => this.alertar(200),
          err => this.alertar(437)  
        );
    }
  }
  