import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardBookingComponent } from './dashboard-booking/dashboard-booking.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardManageComponent } from './dashboard-manage/dashboard-manage.component';
import { DashboardServiceComponent } from './dashboard-service/dashboard-service.component';

const dashboard_routes: Routes = [
    {
        path: 'customer/dashboard',
        component: DashboardLayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: DashboardHomeComponent },
            { path: 'service', component: DashboardServiceComponent },
            { path: 'booking', component: DashboardBookingComponent },
            { path: 'manage', component: DashboardManageComponent },
            { path: 'history', component: DashboardManageComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboard_routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
