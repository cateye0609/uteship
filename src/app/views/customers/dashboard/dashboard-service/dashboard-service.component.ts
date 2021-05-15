import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-service',
  templateUrl: './dashboard-service.component.html',
  styleUrls: ['./dashboard-service.component.scss']
})
export class DashboardServiceComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  gotoCheckout() {
    this.router.navigate(['/customer/dashboard/service-checkout']);
  }
}
