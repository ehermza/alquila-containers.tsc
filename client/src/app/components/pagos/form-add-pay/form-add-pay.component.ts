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

  SumarPagosTotal(res: any) 
  {
    const pagos: Array<Pago> = res;
    var totalPayFromClient:Number = 0;
    pagos.forEach(pago => {
      if (pago.value!=null)
      totalPayFromClient+= (pago.value);
      }
    )
  }
  //  getTotal(idClient:string, nCtner:Number) 
  getTotal() {
    const { client, id_container } = this.model;
    this.pagoService.getPagoByClient(client, id_container)
      .subscribe(
        (res) => {
          console.log(res);
          // const pagos:any = res;
          this.SumarPagosTotal(res);
        }
      )

    /*     
      const pagos_client = await Pago.find(filter);
    
        let total = 0;
        // console.log(filter);
        pagos_client.forEach(function (pago) {
            total += parseInt(pago.value);
    
        });
        console.log(`PAGOS, Total Container: ${id_ctdor}: ${total}`);
        return total;
     */
  }

  onSubmit() {
    const id = this.model.getIdClient();
    this.containerService.getContainerOne(id)
      .subscribe(
        (res) => {
          const ctner: any = res;   // Container class.
          this.model.setClientName(ctner.rented_by);      // Set Client name from Ctner class
          this.model.setCtnerNumber(ctner.id_container);  // ctner number from Container class
          this.insertPagotoDB();
          this.getTotal();
        }
      )
  }

  insertPagotoDB() {
    console.log(this.model);

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