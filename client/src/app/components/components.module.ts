import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';

import { NavigatorComponent } from './navigator/navigator.component';
import { FormClientComponent } from './form-client/form-client.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { TableComponent } from './clients/table/table.component';
import { FormAddClientComponent } from './clients/form-add-client/form-add-client.component';

@NgModule({
  declarations: [
    NavigatorComponent,
    FormAddClientComponent,
    TableComponent,
    FormClientComponent,
    FormContainerComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule

  ], 
  exports: [
    NavigatorComponent,
    FormAddClientComponent,
    TableComponent,
    FormContainerComponent,
    FormClientComponent,
  ]
})
export class ComponentsModule { }
