import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageClientComponent } from './page-client/page-client.component';
import { ComponentsModule } from '../components/components.module';

// import { NavigatorComponent } from '../components/navigator/navigator.component';
// import { FormAddClientComponent } from '../components/clients/form-add-client/form-add-client.component';
// import { TableComponent } from '../components/clients/table/table.component';
import { PageContainersComponent } from './page-containers/page-containers.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { PagePaysComponent } from './page-pays/page-pays.component';



@NgModule({
  declarations: [
    PageClientComponent,
    PageContainersComponent,
    PageProfileComponent,
    PagePaysComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    // NavigatorComponent,
    //  FormAddClientComponent,
    //  TableComponent
  ],
  exports: [
     PageClientComponent,
     PageProfileComponent
  ]
})
export class ViewsModule { }
