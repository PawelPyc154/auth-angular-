import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import * as AuthActions from './store/auth/auth.actions';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  test: any;
  constructor(private store: Store<AppState>) {
    store.select('auth').subscribe((value: any) => {
      this.test = value;
    });
  }

  //
  setError(): void {
    this.store.dispatch(
      new AuthActions.Login({ email: 'elo@gmail.com', password: '12345678' })
    );
  }
}
