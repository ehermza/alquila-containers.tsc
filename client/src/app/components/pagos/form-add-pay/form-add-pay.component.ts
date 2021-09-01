// import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Container } from 'src/app/models/container';

// import { Contenedor } from 'src/app/models/Contenedor';
import { Pago } from 'src/app/models/Pago';

import { ContainersService } from 'src/app/services/containers.service';
import { PagoService } from 'src/app/services/pago.service';



@Component({
  selector: 'app-form-add-pay',
  templateUrl: './form-add-pay.component.html',
  styleUrls: ['./form-add-pay.component.css']
})
export class FormAddPayComponent implements OnInit {

  // list:any= [];
  dataSource: any = [];
  model: Pago = new Pago();
  clientName: string = '';

  constructor(
    private containerService: ContainersService,
    private pagoService: PagoService,
    private router: Router
  ) { }

  formAddPay = new FormGroup({
    client: new FormControl('', Validators.required),
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

  onSubmit() {
    const id = this.model.getIdClient();
    this.containerService.getContainerOne(id)
      .subscribe(
        (res) => {
          const ctner: any = res;   // Container class.
          this.model.setClientName(ctner.rented_by);
          // this.clientName = ctner.rented_by;
          this.insertPagotoDB()
        }
      )
  }

  insertPagotoDB() {
    console.log(this.model);

    // this.model.setClientName()
    this.pagoService.createPago(this.model)
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/clients/alert/210');
          // this.router.navigate(['/clients/alert/210'])

        },
        (err) => console.log('ERROR! ', err)
      )
  }
}

function filtrar(objeto: any) {
  return (objeto.active);
}