import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/api/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.scss'],
})
export class HomeLoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  loginTypeForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void { }

  onSubmit() {
    this.authService.login(this.loginTypeForm.value.name, this.loginTypeForm.value.password).subscribe(
      res => this.router.navigate(['/customer/dashboard'])
    );
  }
}
