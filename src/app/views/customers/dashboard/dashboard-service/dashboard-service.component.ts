import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Package } from 'src/app/_models/package.model';
import { PackageService } from 'src/app/_services/package.service';

@Component({
  selector: 'app-dashboard-service',
  templateUrl: './dashboard-service.component.html',
  styleUrls: ['./dashboard-service.component.scss']
})
export class DashboardServiceComponent implements OnInit {
  packages: Package[];
  constructor(
    private packageService: PackageService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.packages = [];
  }

  ngOnInit(): void {
    this.getPackages();
  }

  getPackages() {
    this.packageService.getPackages().subscribe(
      res => this.packages = res,
      err => this.toastr.error("Get packages error")
    )
  }

  gotoCheckout() {
    this.router.navigate(['/customer/dashboard/service-checkout']);
  }
}
