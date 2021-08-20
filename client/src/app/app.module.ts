import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableComponent } from './components/clients/table/table.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { FormAddClientComponent } from './components/clients/form-add-client/form-add-client.component';
// import { FormClientComponent } from './components/form-client/form-client.component';
// import { FormContainerComponent } from './components/containers/form-container/form-container.component';

import { ViewsModule } from './views/views.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    ViewsModule,      // Re:
    ComponentsModule, // Re:
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
