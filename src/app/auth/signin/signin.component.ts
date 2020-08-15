import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { required } from './validators';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/store/auth/auth.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/store/auth/auth.actions';
@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', required('login', 'Login is required!')),
    password: new FormControl('', required('password', 'Login is required!')),
  });

  serverError: null | { [k: string]: string };
  constructor(private store: Store<AppState>) {
    store.select('auth').subscribe(({ error }) => {
      this.serverError = error;
      if (error) {
        Object.entries(error).forEach(([key, value]) => {
          this.form.get(key).setErrors({ message: value });
        });
      } else {
        Object.keys(this.form.controls).forEach((key) => {
          this.form.controls[key].setErrors(null);
        });
      }
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      if (this.serverError) {
        this.store.dispatch(new AuthActions.CleanError());
      }
    });
  }

  onSubmit(): void {
    // console.log(this.form.value);

    this.store.dispatch(new AuthActions.Login(this.form.value));
  }
}
