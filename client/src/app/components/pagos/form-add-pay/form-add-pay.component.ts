import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import { Contenedor } from 'src/app/models/Contenedor';
import { Pago } from 'src/app/models/Pago';
import { ContainersService } from 'src/app/services/containers.service';

@Component({
  selector: 'app-form-add-pay',
  templateUrl: './form-add-pay.component.html',
  styleUrls: ['./form-add-pay.component.css']
})
export class FormAddPayComponent implements OnInit {

  // list:any= [];
  dataSource:any= [];
  model: Pago = new Pago();

  constructor(
    private containerService:ContainersService
  ) { }
  
  formAddPay = new FormGroup({
    client: new FormControl('',Validators.required),
    value: new FormControl ('', Validators.pattern(/^[0-9]*$/)),
    // recibo_n: new FormControl(),
    recibo_n: new FormControl ('', Validators.pattern(/^[0-9]*$/)),

  });

  ngOnInit(): void {
    this.getContainers();
  }
  
  getContainers() {
    this.containerService.getContainers()
    .subscribe(
      (res) => {
        const list:any = res;
        this.dataSource = list.filter(filtrar);
        // console.log(this.games);
        },
        (err) => console.error(err)
      );
  }

  
  onSubmit(){    
  }
}

function filtrar(objeto:any) {
return (objeto.active);
}