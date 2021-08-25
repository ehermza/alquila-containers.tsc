import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Contenedor } from 'src/app/models/Contenedor';


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

    constructor(private http:HttpClient) { }
  
    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges)  
    {
      this.idCtner = this.CONTAINER._id;
      console.log(`(formContainer) CONTAINER.get() `, this.CONTAINER);
      // this.model.setId(this.CONTAINER._id);
      this.model.setAtributtes(
        this.CONTAINER._id,
        this.CONTAINER.id_container,
        this.CONTAINER.price_tocharge,
        this.CONTAINER.rented_by
      )
    }

    unlinkClient() 
    {
      this.submitted = true;

      this.model.Unlinked();
      console.log(`unlink id container: ${this.model._id} `);
      // touch backend! router.get('/containers/unlink/:idcont', async function (req, res) 
      this.http.put<any>(`/api/containers/${this.idCtner}`, this.model)
        .subscribe(
          data => { console.log('(unlinkClient) Subscribe: ', data); }
        );
    }

    updatePrice()
    {
      if(this.submitted) return;
      this.submitted = true;

      this.http.put<any>(`/api/containers/${this.idCtner}`, this.model)
        .subscribe(
          data => { console.log('(updatePrice) Subscribe: ', data); }
        );
  
  
    }
  }
  