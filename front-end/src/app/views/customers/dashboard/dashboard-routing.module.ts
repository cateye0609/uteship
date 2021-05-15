import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

const dashboard_routes: Routes = [
    {
        path: 'customer/dashboard',
        component: DashboardLayoutComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboard_routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
