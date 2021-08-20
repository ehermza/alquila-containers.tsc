import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './views/page-client/page-client.component';
// import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: PageClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
