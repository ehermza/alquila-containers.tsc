import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})

export class AlertComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void
  {
    let idByUrl = this.route.snapshot.paramMap.get("id");
    if (idByUrl != null) {
      this.iniciar(idByUrl);  
     }
  }
  
  iniciar(alertNumber:string) 
  {
    console.log(`alertNumber: ${alertNumber}`);
    // const url = new URL(window.location.href);
    // console.log(url);
    // const alert_id = url.searchParams.get('alert');

    const MSTIMER = 3000;
    var message, title = "";
    var objeto = {};
    switch (alertNumber) {
      case '430':
        objeto = {
          title: "Error al agregar cliente",
          text: "Intentalo de vuelta por favor!",
          icon: 'error',
          timer: undefined
        }
        break;
      case '259':
        objeto = {
          text: "El Contenedor seleccionado ya se encuentra alquilado. Deberías desvincular Cliente en 'Editar'",
          title: "Error al agregar cliente",
          icon: 'error',
          timer: undefined
        }
        break;
      case '200':
        objeto = {
          title: 'Cliente actualizado',
          text: 'Sus Datos fueron cargados con éxito.',
          icon: 'success',
          timer: MSTIMER
        }
        break;
      case '210':
        objeto = {
          title: 'Pago ingresado',
          text: 'El registro fue cargado con éxito.',
          icon: 'success',
          timer: MSTIMER
        }
        break;
      default:
    };
    if (alertNumber != null) fireSwalError(objeto);
  }

}

export async function fireSweetAlert(idpago: string)
 {
  const result = await Swal.fire({
    title: 'Borrar Pago',
    text: 'Estás a punto de eliminar un registro de Pago. ',
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: `Confirmar`
  });

  if (result.isConfirmed) {
    {
      // window.location = `/pagos/delete/${idpago}`
    }
  };
};

export async function fireSwalError(objeto: any)
 {
  const { title, text, icon, timer } = objeto;
  await Swal.fire({
    title: title,
    text: text,
    icon: icon,
    timer: timer,
    showConfirmButton: (!timer),
    // timerProgressBar:
    // toast:
    position: 'center',
    allowOutsideClick: true,
    showCloseButton: false,
    confirmButtonText: 'Aceptar'
  });
};

