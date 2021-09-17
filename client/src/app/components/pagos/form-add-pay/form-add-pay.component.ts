import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { format } from 'date-fns';


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
  dts: any = [];    // delete,
  // displayedColumns:string[] = ['paid_at','value','recibo_n'];

//   model: Pago = new Pago();
    model: any = {};
    idClient: string = '-1';
    container: Contenedor|null = null;
    readonly: Boolean= true;
    clientname: string = 'empty';      // delete!

  constructor(
    private containerService: ContainersService,
    private clientService: ClientService,
    private rentalService: RentalService,
    private router: Router
  ) { }

  formSelect = new FormGroup({
    container: new FormControl('', Validators.required),
  });

  formAddPayment = new FormGroup({
    // container: new FormControl('', Validators.required),
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
          this.model.container = "";
          // console.log(this.dataSource);
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

  alertar(idurl:number) {
    this.router.navigate([`clients/alert/${idurl}`]);
  }

  onSubmit() {
    // const id = this.model.getIdClient();
    const idCtner = this.model.container;
    console.log("id container: ", this.model.container);
    this.rentalService.createPaymentService(this.model)
      .subscribe(
        res => this.alertar(210),
        err => this.alertar(440)
    )
  }

  printPaymentsOnTable(){
    const {container} = this.model;
    console.log
    // this.rentalService.getPaymentsByCtnerCtrl()
    this.rentalService.getPaymentsByCtnerCtrl(container);
    this.readonly = false;
    // console.log(this.container?.rented_by)
    // this.clientname = (this.container == null)? "": this.container.rented_by;
    this.clientname =  "perolaputamadre!"
  }
}

function filtrar(objeto: any) {
    return (objeto.active);
  }

  function formatDate(objeto:any)
   {
    const dt= new Date(objeto.paid_at);
    console.log(dt);
    objeto.paid_str = format(dt, 'dd/MM/yyyy');
    return objeto;
  }
