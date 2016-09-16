import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';

import { contentHeaders } from './auth.headers';

const styles   = require('./login.css');
const template = require('./login.html');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ]
})
export class Login {
  loginForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  constructor(public router: Router, 
              public http: Http,
              public fb: FormBuilder) {
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  login(event, value: any) {
    event.preventDefault();
    console.log('value', value)
    let body = JSON.stringify({ username: value.username, password: value.password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          this.router.navigate(['/home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigate(['/signup']);
  }
}
