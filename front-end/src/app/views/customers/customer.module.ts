import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';

@NgModule({
  declarations: [
    CustomerHomeComponent
  ],
  imports: [
    CommonModule,
    AuthModule
  ]
})
export class CustomerModule { }
