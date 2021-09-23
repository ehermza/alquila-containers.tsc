import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './views/page-client/page-client.component';
import { PagePaysComponent } from './views/page-pays/page-pays.component';
import { PageProfileComponent } from './views/page-profile/page-profile.component';
// import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'clients', component: PageClientComponent },
  { path: 'clients/alert/:id', component: PageClientComponent },

  { path: 'containers', component: PageProfileComponent },
  { path: 'containers/edit/:id', component: PageProfileComponent },

  { path:'pagos',component: PagePaysComponent },
  { path: 'pagos/alert/:id', component: PageClientComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'clients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
