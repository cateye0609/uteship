import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enterprise-login',
  templateUrl: './enterprise-login.component.html',
  styleUrls: ['./enterprise-login.component.scss']
})
export class EnterpriseLoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }


  onLogin() {
    this.router.navigate(['/enterprise/dashboard']);
  }
}
