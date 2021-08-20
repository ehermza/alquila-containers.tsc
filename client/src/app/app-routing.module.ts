import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientComponent } from './views/page-client/page-client.component';
import { PageProfileComponent } from './views/page-profile/page-profile.component';
// import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'clients', component: PageClientComponent },
  { path: 'containers', component: PageProfileComponent },
  
  { path: '**', pathMatch: 'full', redirectTo: 'clients' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
