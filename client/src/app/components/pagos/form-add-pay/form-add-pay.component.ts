import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from 'src/app/models/Client';
import { Contenedor } from 'src/app/models/Contenedor';

import { ClientService } from 'src/app/services/client.service';
import { ContainersService } from 'src/app/services/containers.service';
import { RentalService } from 'src/app/services/rental.service';

// import { PagoService } from 'src/app/services/pago.service';


@Component({
  selector: 'app-form-add-pay',
  templateUrl: './form-add-pay.component.html',
  styleUrls: ['./form-add-pay.component.css']
})
export class FormAddPayComponent implements OnInit {

  dataSource: any = [];
//   model: Pago = new Pago();
    model: any = {};
    idClient: string = '-1';
    clientName: string = '';      // delete!
    container: Contenedor|null = null;

  constructor(
    private containerService: ContainersService,
    private clientService: ClientService,
    private rentalService: RentalService,
    private router: Router
  ) { }

  formAddPay = new FormGroup({
    container: new FormControl('', Validators.required),
    value: new FormControl('', Validators.pattern(/^[0-9]*$/)),
    // recibo_n: new FormControl(),
    recibo_n: new FormControl('', Validators.pattern(/^[0-9]*$/)),
  });

  ngOnInit(): void {
    this.getContainers();
  }

  getContainers() {
    this.containerService.getContainers()
      .subscribe(
        (res) => {
          const list: any = res;
          this.dataSource = list.filter(filtrar);
          // console.log(this.games);
        },
        (err) => console.error(err)
      );
  }
  getTotal() {}
  insertPagotoDB() {}

  setClientProperty() {
      if(this.container==null) return;

      this.idClient = this.container.rented_by_id;
  }

  findContainer(id:String) 
  {
    /**
     * deprecated! 
     */
    this.containerService.getContainerOne(id)
      .subscribe(
        (res) => {
            const obj:any = res;
            this.container = obj;
            console.log("cliente object: ", this.container);
            this.setClientProperty();
        }
      )

  }
  onSubmit() {
    // const id = this.model.getIdClient();
    const idCtner = this.model.container;
    console.log("id container: ", this.model.container);
    // this.findContainer(idCtner);
    // this.pagoService.createPago(this.model)
    this.rentalService.createPaymentService(this.model)
      .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}

function filtrar(objeto: any) {
    return (objeto.active);
  }