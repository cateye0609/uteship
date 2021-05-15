import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './views/admin/home-admin/home-admin.component';
import { HomeEnterpriseComponent } from './views/enterprise/home-enterprise/home-enterprise.component';

const routes: Routes = [
  { path: 'admin', component: HomeAdminComponent },
  { path: 'enterprise', component: HomeEnterpriseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
