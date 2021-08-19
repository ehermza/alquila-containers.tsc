import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

import { ContainersService } from './services/containers.service';
import { BlankComponent } from './components/blank/blank.component';
import { NavigatorComponent } from './components/navigator/navigator.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    BlankComponent,
    NavigatorComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    ContainersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
