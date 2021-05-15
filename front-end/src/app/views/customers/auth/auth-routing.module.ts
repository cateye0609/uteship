import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from './home-login/home-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const auth_routes: Routes = [
    { path: '', component: HomeLoginComponent },
    { path: 'customer/login', component: HomeLoginComponent },
    { path: 'customer/sign-up', component: SignUpComponent },
];

@NgModule({
    imports: [RouterModule.forChild(auth_routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule { }
