import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formloginadmin: FormGroup;
  submitted = false;
  token;

  constructor(private router: Router, private authservice: AuthentificationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formloginadmin = this.formBuilder.group({

      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.formloginadmin.controls;
  }

  login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formloginadmin.invalid) {
      return;
    }
    this.authservice.login(this.formloginadmin.value).subscribe((res: any) => {
      console.log(res);
      this.token = res.data.token;
      // console.log(this.token);
      this.router.navigate(['/home']);
      localStorage.setItem('tocken', this.token);
    });
  }

}
