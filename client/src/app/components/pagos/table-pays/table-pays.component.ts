import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-table-pays',
  templateUrl: './table-pays.component.html',
  styleUrls: ['./table-pays.component.css']
})
export class TablePaysComponent implements OnInit {

  dataSource:any = [];
  displayedColumns: string[] = ['client_name','value','recibo_n','paid_at'];
  
  constructor(
    private pagoService:PagoService
  ) { }

  ngOnInit(): void {
    this.dataSource = this.pagoService.getPagosAll();
  }
  

}
